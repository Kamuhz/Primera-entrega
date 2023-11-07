import { React, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../helper/items.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/cartcontext.jsx'

const Item = () => {
    const { itemId } = useParams()
    const Products = getItemById(itemId)
    const { agregarProducto, productosCarrito } = useContext(CartContext)
    
    const handleAgregarAlCarrito = () => {
      const productoExistente = productosCarrito.find((item) => item.id === Products.id);
  
      if (productoExistente) {
        agregarProducto((oldData) =>
          oldData.map((item) =>
            item.id === Products.id ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        );
      } else {
        agregarProducto([...productosCarrito, { ...Products, cantidad: 1 }]);
      }
    };
    
    return (
        <div style={{display:"flex", justifyContent:"center", height: "525px", marginTop: "50px"}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Products.imagenURL} />
          <Card.Body>
            <Card.Title>{Products.nombre}</Card.Title>
            <Card.Text>{Products.descripcion}</Card.Text>
            <p>Precio: {Products.precio}</p>
            <p>Stock: {Products.stock} Unidades</p>
            <Button variant="primary" onClick={handleAgregarAlCarrito}>Añadir al carro</Button>
          </Card.Body>
        </Card>
        </div>
      );
    }

export default Item