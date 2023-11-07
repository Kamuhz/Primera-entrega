import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../index';
import { CartContext } from '../context/cartcontext.jsx';
import './Checkout.css'

function Checkout() {
  const { productosCarrito, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [pedidoRealizado, setPedidoRealizado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        nombre,
        telefono,
        email,
        productos: productosCarrito,
      };

      const orderRef = await addDoc(collection(db, 'orders'), orderData);
      setOrderId(orderRef.id);
      setPedidoRealizado(true);

      vaciarCarrito();
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <div className="checkout-container">
      {pedidoRealizado ? (
        <div className='letra-p'>
          <p>Pedido realizado con éxito</p>
          <p>ID de la orden creada: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className="submit-button">Realizar Pedido</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;

