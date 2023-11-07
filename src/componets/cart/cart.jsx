import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext';
import './cart.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Cart() {
  const { productosCarrito, eliminarProducto, calcularTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {productosCarrito.length > 0 ? (
        <>
        <ul className="cart-list">
          {productosCarrito.map((producto) => (
            <li key={producto.id} className="cart-item">
              <span className="cart-quantity">{producto.cantidad}</span>
              <span className="cart-name">{producto.nombre}</span>
              <span className="cart-price">${producto.precio}</span>
              <button className="cart-remove" onClick={() => eliminarProducto(producto.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
        <div className="cart-total">Total: ${calcularTotal()}</div>
        <div className='btn-container'>
        <Button className='btn-checkout'>
          <Link className='btn-checkout-text'to="/checkout">Comprar</Link>
        </Button>
        </div>
        </>
      ) : (
        <div className="empty-cart">Debe Agregar productos al Carrito</div>
      )}
    </div>
  );
}

export default Cart;