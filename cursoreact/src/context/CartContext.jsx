import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 


export const CartContextProvider = ({children}) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    // logica de no repetir el product
    const agregarCart = ( producto ) => {
        const idxProd = cartList.findIndex(product => product.id === producto.id)
        if(idxProd!==-1){
            cartList[idxProd].cantidad += producto.cantidad
            setCartList([...cartList])
            return 
        }
        setCartList( [
            ...cartList,
            producto
        ] )
        
    }

    const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.price), 0)
    
    const cantidadTotal = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)

    const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))
    
    const vaciarCarrito = () =>{
        setCartList([])
    }
 
    return (
        <CartContext.Provider value={{
            cartList, 
            agregarCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

// crear un conteto
// inicializar con un array vacio 
// exportar e importar en app.