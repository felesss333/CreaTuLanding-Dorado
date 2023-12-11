import { ImCart } from 'react-icons/im';


const CartWidget = () => {
  return (
    <div className='contenedorcarrito col-2 mt-1'>
        <ImCart className='carrito'/>
        <span className='contadorcarrito m-2'>0</span>

    </div>
            
  )
}

export default CartWidget