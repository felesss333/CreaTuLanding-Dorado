import CartWidget from '../CartWidget/CartWidget';
import Logotipo from '../../../assets/quibblerecords-blanco.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navlinks col-12 mx-auto mt-3'>
      <ul className='p-0 mb-0'>
        <div className='row'>
          <li className='col-2 mt-2'>
            <Link to={'/'}>
              <img className='logotipo col-12' src={Logotipo} alt="Logo" />
            </Link>
          </li>
          <li className='col-2 mt-2'>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className='col-2 mt-2'>
            <Link to={'/category/CD'}>CD&apos;s</Link>
          </li>
          <li className='col-2 mt-2'>
          <Link to={'/category/Boxset'}>Boxset&apos;s</Link>
          </li>
          <li className='col-2 mt-2'>
            <Link to={'/category/DVD'}>DVD&apos;s</Link>
          </li>

          <CartWidget />
        </div>
      </ul>
    </div>
  );
}

export default NavBar;