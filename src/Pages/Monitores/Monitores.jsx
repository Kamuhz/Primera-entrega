import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../index';
import '../Productos/productos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MonitoresPage() {
  const [monitores, setMonitores] = useState([]);
  const categoria = 'Monitor';

  useEffect(() => {
    const fetchMonitores = async () => {
      try {
        const q = query(collection(db, 'items'), where('categoria', '==', categoria));
        const querySnapshot = await getDocs(q);
        const items = [];

        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        setMonitores(items);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchMonitores();
  }, [categoria]);

  return (
    <div>
      <h1 className="page-title">Monitores</h1>
      <div className="products">
        <ul className="product-list">
          {monitores.map((monitor) => (
            <li className="product-item" key={monitor.id}>
              <img src={monitor.imagenURL} alt={monitor.nombre} />
              <strong>{monitor.nombre}</strong>
              <p>Precio: ${monitor.precio}</p>
              <div>
                <Button variant="primary">
                  <Link to={`${monitor.id}`}>Ver Producto</Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MonitoresPage;