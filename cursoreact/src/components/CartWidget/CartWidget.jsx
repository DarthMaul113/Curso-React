import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../css/CartWidget.css'


const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart  size={'1.75rem'} color={'white'} id={'carrito'} />
      <span>{5}</span>
    </div>
  );
};

export default CartWidget;
