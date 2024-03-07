import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer message={'Bienvenidos a la tienda'}/>
    </>
  )
}

export default App
