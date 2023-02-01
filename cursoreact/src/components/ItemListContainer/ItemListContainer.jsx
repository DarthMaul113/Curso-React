import React from 'react';
import '../../css/ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
  //recibimos la prop y la mostramos
  const texto = 'aca se venden foto patas de michis';
  return (
    <div>
      <h2>{greeting}</h2>
      <p>{texto}</p>
    </div>
  );
};

export default ItemListContainer;