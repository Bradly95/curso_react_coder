import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <BrowserRouter>
      <NavBar selectedCategory={selectedCategory} selectedProduct={selectedProduct}/>

      <Routes>
        <Route path='/:categoryFromURL?' element={<ItemListContainer handleSelectedCategory={setSelectedCategory}/>} />
        <Route path='product-details/:productId?' element={<ItemDetailsContainer handleSelectedProduct={setSelectedProduct}/>} />
        <Route path='*' element={<h1>404 | No Souch Route</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
