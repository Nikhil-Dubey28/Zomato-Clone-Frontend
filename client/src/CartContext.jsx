

// export const CartContext = createContext( {
    //     getProductQuantity: () => {},
    //     addOneToCart: () => {},
    //     removeOneFromCart: () => {},
    //     deleteFromCart: () => {},
    //     getTotalCost: () => {}
    // })
    
    import { useState,createContext,useContext } from "react";
export const CartContext = createContext()

export  function CartProvider({children}) {
    
    const [cartCount, setCartCount] = useState(0)
    // const [contextSelectedAdrress,setContextSelectedAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null);
    const[contextCart, setContextCart] = useState([])
    const [refresh, setRefresh] = useState(false)
   const [orderId,setOrderId] = useState(null)

    

    return (
        <CartContext.Provider 
        
        
        value= {{
            cartCount,
            setCartCount,
           selectedAddress,
           setSelectedAddress,
            contextCart,
            setContextCart,
            refresh,
            setRefresh,
            orderId,
            setOrderId
        }} >

        {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);