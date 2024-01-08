import React, { useContext } from "react";
import CartContext from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, getTotal, removeSingleItem, removeItem, increaseQuantity, clearCart } = useContext(CartContext);

  console.log('Cart:', cart);

  if(cart.length === 0) {
    return(
      <div className="col-12 align-items-center justify-content-center mb-5">
        <h1 className="carritosinnada">¡Todavía no agregaste productos al carrito!</h1>
        <Link to={'/'} onClick={() => handleLinkClick('/')}>Volver a los productos</Link>
      </div>
    )
  }else{

  return (
    <div>
      <div className="col-12 align-items-center justify-content-center mt-4 px-5">
        <table className="table table-dark table-striped align-items-center justify-content-center">
          <thead>
            <tr>
              <th scope="col">Cantidad</th>
              <th scope="col">Banda / Disco</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio x Unidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col"></th>
              
            </tr>
          </thead>
          <tbody className="" key={'cart-tbody'}>
            {cart.map((prod, index) => (
              <tr key={prod.id !== undefined ? prod.id : index}>
                <td className="align-items-center justify-content-center d-flex">
                 <button className="subirybajar" onClick={() => removeSingleItem(prod.id)}>-</button>
                
                <p className="mx-3" >{prod.quantity}</p>
                <button className="subirybajar" onClick={() => increaseQuantity(prod.id)}>+</button>
                </td>

                <td>{prod.banda} / {prod.disco}</td>
                <td>{prod.categoria}</td>
                <td>u$s {prod.precio}</td>
                <td>{'u$s ' + (prod.quantity * prod.precio).toFixed(2)}</td>
                <td>
                  
                  <button className="subirybajar1" onClick={() => removeItem(prod.id)}>X</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="linea1" />
          <div className="row col-12 text-end mt-2 mx-auto d-flex justify-content-end">
            <p className="totalfinal col-12 mt-2">u$s {getTotal().toFixed(2)}</p>
            <hr className="linea1 mb-3" />
            <button className="subirybajar1 col-1 ml-2" onClick={clearCart}>Vaciar Carro</button>
        </div>
      </div>
    </div>
  );
}
}

export default Cart;
