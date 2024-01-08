import React, { useEffect } from 'react';
import './App.css';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import NavBar from './assets/components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImage from './assets/header2.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Footer from './assets/components/Footer/Footer';
import { CartContextProvider } from './assets/components/CartContext/CartContext';
import Cart from './assets/components/Cart/Cart';

function App() {


  return (
    <div className="cuerpo">
      <img className="imagehome mt-5" src={HeaderImage} alt="Header" />
      <CartContextProvider>
        <BrowserRouter>
          <NavBar className="navbar" />
          <hr className="linea2" />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path={'/product/:ItemId'} element={<ItemDetailContainer />} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
            <Route path={'/cart'} element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <Footer className='footer'></Footer>
      </CartContextProvider>
    </div>
  );
}

export default App;
