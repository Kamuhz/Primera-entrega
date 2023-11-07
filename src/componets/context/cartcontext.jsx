import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([])

  useEffect(() => {}, [cart])

  const eliminarProducto =(id) => {
    const nuevoCarrito = cart.filter((producto) => producto.id !== id)
    setCart(nuevoCarrito)
  }
  
  const vaciarCarrito = () => {
    setCart([]);
  };

  const calcularTotal = () => {
    const total = cart.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0);
  
    return total;
  };

  return (
    <CartContext.Provider value={{productosCarrito:cart, agregarProducto:setCart, eliminarProducto, calcularTotal, vaciarCarrito}}> {children} </CartContext.Provider>
  )
}