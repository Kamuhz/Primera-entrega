import React from 'react';
import { items } from '../../helper/items';
import '../Productos/productos.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlacasDeVideoPage() {
  // Filtrar los productos que pertenecen a la categoría "placasDeVideo"
  const placasDeVideo = items.filter((item) => item.categoria === 'placasDeVideo');

  return (
    <div><h1 className="page-title">Placas de Video</h1>
    <div className="products">
      <ul className="product-list">
        {placasDeVideo.map((placa) => (
          <li className="product-item" key={placa.id}>
            <img src={placa.imagenURL} alt={placa.nombre} />
            <strong>{placa.nombre}</strong>
            <p>Precio: ${placa.precio}</p>
            <div>
              <Button variant="primary"><Link to={`${placa.id}`}>Ver Producto</Link></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default PlacasDeVideoPage;

