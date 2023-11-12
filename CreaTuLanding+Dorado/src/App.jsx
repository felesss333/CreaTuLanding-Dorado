import './App.css'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import NavBar from './assets/components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
     <ItemListContainer title='Quebble Records'/>
     <hr/>
    <div>
      <NavBar />
      </div>
     
    </>
  )
}

export default App
