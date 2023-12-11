import './App.css';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import NavBar from './assets/components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImage from './assets/header2.jpg'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';




function App() {
  return (
    <div className='cuerpo' >
    <img className="imagehome mt-5" src={HeaderImage}/>
      <BrowserRouter>
        <NavBar className='navbar' />
        <hr className='linea2'/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path={'/product/:ItemId'} element={<ItemDetailContainer />} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
          <Route path={'/cart'} element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;
