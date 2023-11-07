import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([])

  useEffect(() => {
    console.log("Nuestro Carrito:")
    console.log("cart")
  }, [cart])

  const eliminarProducto =(id) => {
    const nuevoCarrito = cart.filter((producto) => producto.id !== id)
    setCart(nuevoCarrito)
  }

  return (
    <CartContext.Provider value={{productosCarrito:cart, agregarProducto:setCart, eliminarProducto}}>
        {children}
    </CartContext.Provider>
  )
}