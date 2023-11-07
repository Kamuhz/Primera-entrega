import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../index';
import '../Productos/productos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TecladosPage() {
  const [teclados, setTeclados] = useState([]);
  const categoria = 'teclados';

  useEffect(() => {
    const fetchTeclados = async () => {
      try {
        const q = query(collection(db, 'items'), where('categoria', '==', categoria));
        const querySnapshot = await getDocs(q);
        const items = [];

        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        setTeclados(items);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchTeclados();
  }, [categoria]);

  return (
    <div>
      <h1 className="page-title">Teclados</h1>
      <div className="products">
        <ul className="product-list">
          {teclados.map((teclado) => (
            <li className="product-item" key={teclado.id}>
              <img src={teclado.imagenURL} alt={teclado.nombre} />
              <strong>{teclado.nombre}</strong>
              <p>Precio: ${teclado.precio}</p>
              <div>
                <Button variant="primary">
                  <Link to={`${teclado.id}`}>Ver Producto</Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TecladosPage;