import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './productos.css'
import Button from 'react-bootstrap/Button';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../index';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Catalogo de Productos</h1>
      <main className='products'>
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <img src={item.imagenURL} alt={item.nombre} />
              <div>
                <strong>{item.nombre}</strong>
                <p className='product-price'>${item.precio}</p>
              </div>
              <div>
                <Button variant="primary">
                  <Link to={`${item.id}`}>Ver Producto</Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Products;