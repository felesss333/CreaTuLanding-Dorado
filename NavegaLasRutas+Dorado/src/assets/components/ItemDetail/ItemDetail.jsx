import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ banda, genero, disco, categoria, precio, stock, año, avatar, tracklist, ItemId }) => {
  const [showItemCount, setShowItemCount] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    console.log(`Se Agregaron ${quantity} productos`);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowItemCount(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='row col-10 mx-auto my-5'>
      <section className='col-5'>
        <img src={avatar} />
        {quantity > 0 ? (
          <Link to={'/cart'} className='carritover col-12'>Carrito de compras</Link>
        ) : (
          showItemCount && <ItemCount productId={ItemId} initialValue={1} stock={stock} onAdd={onAdd} />
        )}
      </section>
      <aside className='contenedorinfo col-7 ml-2'>
        <div className='contenedordetail col-12'>
          <p className='detaailbanda col-12 text-start'>{banda}</p>
          <p className='detaaildisco col-12 text-start'>{disco}</p>
        </div>
          <hr className='lineadetail col-12'/>
          <p className='detaailgenero text-start'> {genero}</p>
          <div className='contenedordetail row col-12'>
            <p className='col-3 detaailcategoria'>Formato: {categoria}</p>
            <p className='col-3 detaailaño'>Año: {año}</p>
            <p className='col-3 detaailprecio'>Precio: ${precio}</p>
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
                <hr className='detaildivisoria'/>
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