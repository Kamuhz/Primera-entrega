import React from 'react';
import { items } from '../../helper/items';
import '../Productos/productos.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function MonitoresPage() {
  const monitores = items.filter((item) => item.categoria === 'Monitor');

  return (
    <div><h1 className="page-title">Monitores</h1>
    <div className="products">
      <ul className="product-list">
        {monitores.map((monitor) => (
          <li key={monitor.id} className="product-item">
            <img src={monitor.imagenURL} alt={monitor.nombre} />
            <strong>{monitor.nombre}</strong>
            <p>Precio: ${monitor.precio}</p>
            <div>
              <Button variant="primary"><Link to={`${monitor.id}`}>Ver Producto</Link></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default MonitoresPage;