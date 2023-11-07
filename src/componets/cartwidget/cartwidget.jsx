import {React, useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartcontext';

function CartWidget() {
  const { productosCarrito } = useContext(CartContext);

  // Calcula la cantidad total de artículos en el carrito
  const itemCount = productosCarrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <div className="cart-widget">
      <div className="cart-icon-container">
        <link rel="stylesheet" href="" />
        <Link to="/cart" ><FaShoppingCart className="cart-icon" /></Link>
        <span className="item-count my-custom-count">{itemCount}</span>
      </div>
    </div>
  );
}

export default CartWidget;