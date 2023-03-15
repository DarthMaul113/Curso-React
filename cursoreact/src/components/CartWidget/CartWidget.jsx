import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../css/CartWidget.css'
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div>
      <FaShoppingCart  size={'1.75rem'} color={'dark'} id={'carrito'} />
      { cantidadTotal() > 0 && cantidadTotal() }
    </div>
  );
};

export default CartWidget;
