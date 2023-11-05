import React from 'react';
import { items } from '../../helper/items';
import '../Productos/productos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TecladosPage() {
  
  const teclados = items.filter((item) => item.categoria === 'teclados');

  return (
    <div><h1 className="page-title">Teclados</h1>
    <div className="products">
      <ul className="product-list">
        {teclados.map((teclado) => (
          <li className="product-item" key={teclado.id}>
            <img src={teclado.imagenURL} alt={teclado.nombre} />
            <strong>{teclado.nombre}</strong>
            <p>Precio: ${teclado.precio}</p>
            <div>
              <Button variant="primary"><Link to={`${teclado.id}`}>Ver Producto</Link></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TecladosPage;
