import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito de 'react-icons/fa'

function CartWidget() {
  return (
    <div className="cart-widget">
      <div className="cart-icon-container">
        <FaShoppingCart className="cart-icon" />
        <span className="item-count my-custom-count">0</span>
      </div>
    </div>
  );
}

export default CartWidget;