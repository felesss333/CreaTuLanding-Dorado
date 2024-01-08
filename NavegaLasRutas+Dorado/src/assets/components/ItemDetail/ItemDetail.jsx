import React, { useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import CartContext from '../CartContext/CartContext';

const ItemDetail = ({ banda, id, genero, disco, categoria, precio, stock, año, avatar, tracklist, ItemId, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 }) => {
  const [showItemCount, setShowItemCount] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    const newProduct = {
      id,
      banda,
      disco,
      categoria,
      precio,
    };
    addItem(newProduct, quantity);
    console.log(`Se Agregaron ${quantity} productos`);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowItemCount(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // Filtra las imágenes vacías y las agrupa para mostrar solo las necesarias
  const avatarsArray = [avatar, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9].filter(Boolean);

  return (
    <div className='row col-10 mx-auto my-5'>
      <section className='col-5'>
        {/* Carrusel de imágenes */}
        <Carousel itemsToShow={1}>
          {avatarsArray.map((avatarUrls, index) => (
            <div key={index}>
              {Array.isArray(avatarUrls) ? (
                avatarUrls.map((avatarUrl, subIndex) => (
                  <img key={`${index}-${subIndex}`} src={avatarUrl} alt={`Imagen ${subIndex + 1}`} />
                ))
              ) : (
                <img key={index} src={avatarUrls} alt={`Imagen ${index + 1}`} />
              )}
            </div>
          ))}
       </Carousel>

        {quantity > 0 ? (
          <div className='row align-items-center justify-content-center d-flex'>
          <Link to={'/cart'} className='carritover col-12'>Ir al carrito de compras</Link>
          </div>
        ) : (
          <ItemCount productId={ItemId} initialValue={1} stock={stock} onAdd={onAdd} />
          
        )}
      </section>
      <aside className='contenedorinfo col-7 ml-2'>
        <div className='contenedordetail col-12'>
          <p className='detaailbanda col-12 text-start'>{banda}</p>
          <p className='detaaildisco col-12 text-start'>{disco}</p>
        </div>
        <hr className='lineadetail col-12' />
        <div className='detaailgenero text-start pt-0 pb-0'>
          {genero && genero.length > 0 && (
            <div>
              <ul className='row my-0 py-0'>
                {genero.map((genre, index) => (
                  <div key={index} className='col-auto'> 
                    <div className='gendetail col-12 mb-1 mt-0 p-2 text-start'>{genre.datgen}</div>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
        <hr className='lineadetail col-12 my-3' />
        <div className='contenedordetail row col-12'>
          <p className='col-3 detaailcategoria'>Formato: {categoria}</p>
          <p className='col-3 detaailaño'>Año: {año}</p>
          <p className='col-3 detaailprecio'>Precio: u$s {precio}</p>
          <p className='col-3 detaailstock'>Stock Disponible: {stock}</p>
        </div>
        {tracklist && tracklist.length > 0 && (
          <div>
            <p className='col-12 detaaitracklist text-start'>Tracklist:</p>
            <ul className='row ml-0'>
              {tracklist.map((track, index) => (
                <div key={index} className='row col-12 m-0 p-0'>
                  <p className='detailcancion col-10 mb-1 mt-0 p-0 text-start'>{track.nombre}</p>
                  <p className='detailduration col-2 mb-1 mt-0 p-0 text-end'>{track.duracion}</p>
                  <hr className='detaildivisoria' />
                </div>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
};

export default ItemDetail;
