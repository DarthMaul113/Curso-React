import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import '../../css/Navbar.css'

function Navbar() {
  return (
    <nav>
    <div class="nav-wrapper pink lighten-2">
      <ul id="nav-mobile" class="right hide-on-med-and-down valign-wrapper">
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Galeria</a></li>
        <li> <CartWidget /></li>
      </ul>
    </div>
  </nav>



  )
}

export default Navbar