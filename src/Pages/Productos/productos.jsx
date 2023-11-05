import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../helper/items'
import './productos.css'
import Button from 'react-bootstrap/Button';
import { getDocs, collection, getFirestore } from 'firebase/firestore'

function Products () {
    return (
        <div><h1>Catalogo de Productos</h1>
        <main className='products'>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <img src={item.imagenURL} alt={item.nombre} />
                        <div>
                            <strong>{item.nombre}</strong> - ${item.precio}
                        </div>
                        <div>
                        <Button variant="primary"><Link to={`${item.id}`}>Ver Producto</Link></Button>
                        </div>
                    </li>
                ))}      
            </ul>
        </main>    
        </div>
    )
}

export default Products