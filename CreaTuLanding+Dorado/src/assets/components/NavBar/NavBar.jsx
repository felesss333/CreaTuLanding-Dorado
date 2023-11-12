import CartWidget from '../CartWidget/CartWidget'
import Logotipo from '../../../assets/quibblerecords-negro.svg'


const NavBar = () => {
  return (


    
       <div className='col-12 mx-auto'>
        <ul className='p-0'>
            <div className='row'>
            <img className='col-2' src={Logotipo}></img>
            <li className='col-2 mt-2'>CD's</li>
            <li className='col-2 mt-2'>Vinilos</li>
            <li className='col-2 mt-2'>Boxset's</li>
            <li className='col-2 mt-2'>DVD's</li>
            <CartWidget/>

            </div>
        </ul>
    </div>
  )
}

export default NavBar