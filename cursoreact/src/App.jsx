import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos!" />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting="Bienvenidos!" />} />
          <Route path='/detalle/:idProducto' element = {<ItemDetailContainer />} />
          <Route path='*' element={ <Navigate to='/' />} />
          <Route path='/cart' element = { <CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
