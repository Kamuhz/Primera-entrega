import { React, useContext } from "react";
import { CartContext } from "../context/cartcontext";
import './cart.css'
import { Button } from "react-bootstrap";

const Cart = () => {

    const {productosCarrito, eliminarProducto} = useContext(CartContext)

    return (
        <>
        <div>
            <h2>Carrito</h2>
        </div>
            {
            productosCarrito.length > 0 ?
            productosCarrito.map ((item) => {

                return (
                    <div className="cartContainer">
                        <h4 className="cartTitle">{item.nombre}</h4>
                        <p className="cartPrice">{item.precio}$</p>
                        <Button variant="primary" className="cartButton" onClick={()=> eliminarProducto(item.id)}>Eliminar Producto</Button>
                    </div>
                )
                })
                :
                <div>
                    <span>Debe Agregar productos al Carrito</span>
                </div>
            }
        </>
    )
    
}

export default Cart
