import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../index';
import '../Productos/productos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlacasDeVideoPage() {
  const [placasDeVideo, setPlacasDeVideo] = useState([]);
  const categoria = 'placasDeVideo';

  useEffect(() => {
    const fetchPlacasDeVideo = async () => {
      try {
        const q = query(collection(db, 'items'), where('categoria', '==', categoria));
        const querySnapshot = await getDocs(q);
        const items = [];

        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        setPlacasDeVideo(items);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchPlacasDeVideo();
  }, [categoria]);

  return (
    <div>
      <h1 className="page-title">Placas de Video</h1>
      <div className="products">
        <ul className="product-list">
          {placasDeVideo.map((placa) => (
            <li className="product-item" key={placa.id}>
              <img src={placa.imagenURL} alt={placa.nombre} />
              <strong>{placa.nombre}</strong>
              <p>Precio: ${placa.precio}</p>
              <div>
                <Button variant="primary">
                  <Link to={`${placa.id}`}>Ver Producto</Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlacasDeVideoPage;
