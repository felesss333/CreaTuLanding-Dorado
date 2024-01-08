import { ImCart } from 'react-icons/im';
import CartContext from '../CartContext/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className='contenedorcarrito col-2'>
      <ImCart className='carrito' />
      <span className='contadorcarrito m-2'>{getQuantity()}</span>
    </div>
  );
};

export default CartWidget;
