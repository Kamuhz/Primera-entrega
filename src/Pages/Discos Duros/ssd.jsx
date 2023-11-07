import React from 'react';
import { items } from '../../helper/items';
import '../Productos/productos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SsdPage() {
  
  const ssdProducts = items.filter((item) => item.categoria === 'Disco duro');

  return (
    <div><h1 className="page-title">SSD (Unidades de Estado Sólido)</h1>
    <div className="products">
      <ul className="product-list">
        {ssdProducts.map((ssd) => (
          <li className="product-item" key={ssd.id}>
            <img src={ssd.imagenURL} alt={ssd.nombre} />
            <strong>{ssd.nombre}</strong>
            <p>Precio: ${ssd.precio}</p>
            <div>
              <Button variant="primary"><Link to={`${ssd.id}`}>Ver Producto</Link></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default SsdPage;





