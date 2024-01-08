import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logotipo from '../../../assets/quibblerecords-blanco.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='navlinks col-12 mx-auto pt-0'>
      <ul className='p-0 mb-0 mt-0'>
        <div className='row navrow mt-0 pt-0'>
          <div className='col-2'>
            <Link to={'/'} onClick={() => handleLinkClick('/')}>
              <img className='logotipo col-12' src={Logotipo} alt="Logo" />
            </Link>
          </div>
          <li className={`col-2 mt-2 ${activeLink === '/' && 'activo'}`} onClick={() => handleLinkClick('/')}>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className={`col-2 mt-2 ${activeLink === '/category/CD' && 'activo'}`} onClick={() => handleLinkClick('/category/CD')}>
            <Link to={'/category/CD'}>CD&apos;s</Link>
          </li>
          <li className={`col-2 mt-2 ${activeLink === '/category/Boxset' && 'activo'}`} onClick={() => handleLinkClick('/category/Boxset')}>
            <Link to={'/category/Boxset'}>Boxset&apos;s</Link>
          </li>
          <li className={`col-2 mt-2 ${activeLink === '/category/DVD' && 'activo'}`} onClick={() => handleLinkClick('/category/DVD')}>
            <Link to={'/category/DVD'}>DVD&apos;s</Link>
          </li>
          <Link className={`col-2 mt-0 d-flex justify-content-center`} to={'/cart'} onClick={() => handleLinkClick('/cart')}>
            <CartWidget />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;