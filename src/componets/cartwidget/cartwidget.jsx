import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <div className="cart-widget">
      <div className="cart-icon-container">
        <link rel="stylesheet" href="" />
        <Link to="/cart" ><FaShoppingCart className="cart-icon" /></Link>
        <span className="item-count my-custom-count">0</span>
      </div>
    </div>
  );
}

export default CartWidget;