import {useState, useContext, createContext} from 'react'


const CartContext = createContext([])

export function useCartContext () {
    return useContext(CartContext)
}


// Creacion Componente
export const CartContextProvider = ({children})=>{
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito (items){
        const indice = cartList.findIndex(i => i.id === items.id)

        if(indice > -1 ) {
            const cant = cartList[indice].cantidad

            let cantNew = cant + items.cantidad

            cartList[indice].cantidad = cantNew

            let array = [...cartList]
            setCartList(array)
        } else{
            setCartList([...cartList, items])
        }
        
    }
    function vaciarCarrito (){
        setCartList([])
    }
    console.log(cartList)
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>

    )
}

/* function CartContext() {
  return <div></div>;
}

export default CartContext; */
