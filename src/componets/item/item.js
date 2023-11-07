import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../helper/items';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/cartcontext';

const Item = () => {
    const { itemId } = useParams();
    const { agregarProducto, productosCarrito } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            const product = await getItemById(itemId);
            setProductData(product);
            setLoading(false);
        };
        fetchProductData();
    }, [itemId]);

    const handleAgregarAlCarrito = () => {
        const productoExistente = productosCarrito.find((item) => item.id === productData.id);

        if (productoExistente) {
            agregarProducto((oldData) =>
                oldData.map((item) =>
                    item.id === productData.id ? { ...item, cantidad: item.cantidad + 1 } : item
                )
            );
        } else {
            agregarProducto([...productosCarrito, { ...productData, cantidad: 1 }]);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", height: "525px", marginTop: "50px" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productData.imagenURL} />
                <Card.Body>
                    <Card.Title>{productData.nombre}</Card.Title>
                    <Card.Text>{productData.descripcion}</Card.Text>
                    <p>Precio: {productData.precio}</p>
                    <p>Stock: {productData.stock} Unidades</p>
                    <Button variant="primary" onClick={handleAgregarAlCarrito}>Añadir al carro</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
