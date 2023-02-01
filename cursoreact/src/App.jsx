import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="Bienvenidos!" />
    </>

  )
}

export default App
