import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../index';
import '../Productos/productos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SsdPage() {
  const [ssdProducts, setSsdProducts] = useState([]);
  const categoria = 'Disco duro';

  useEffect(() => {
    const fetchSsdProducts = async () => {
      try {
        const q = query(collection(db, 'items'), where('categoria', '==', categoria));
        const querySnapshot = await getDocs(q);
        const items = [];

        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        setSsdProducts(items);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchSsdProducts();
  }, [categoria]);

  return (
    <div>
      <h1 className="page-title">SSD (Unidades de Estado Sólido)</h1>
      <div className="products">
        <ul className="product-list">
          {ssdProducts.map((ssd) => (
            <li className="product-item" key={ssd.id}>
              <img src={ssd.imagenURL} alt={ssd.nombre} />
              <strong>{ssd.nombre}</strong>
              <p>Precio: ${ssd.precio}</p>
              <div>
                <Button variant="primary">
                  <Link to={`${ssd.id}`}>Ver Producto</Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SsdPage;





