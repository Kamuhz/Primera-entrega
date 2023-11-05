import React from 'react';
import { items } from '../../helper/items';
import '../Productos/productos.css'; 

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
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default SsdPage;





