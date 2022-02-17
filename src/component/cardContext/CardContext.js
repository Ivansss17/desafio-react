import {useState, useContext, createContext} from 'react'


const CartContext = createContext([])

export function useCartContext () {
    return useContext(CartContext)
}


// Creacion Componente
export const CartContextProvider = ({children})=>{
    //estados y funciones globales
    const [cartList, setCartList] = useState([])
    /* const [cartCant, setCartCant] = useState([]) */

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
   function sumaTotal(items){
    
    const total = cartList.reduce((prev, cart) => prev + cart.precio * cart.cantidad , 0)

    return total
       
    }

    function cantidadItems(items){

        const cantTotal = cartList.reduce((prev, cart) => prev + cart.cantidad , 0)

    return cantTotal

    }

    




    function eliminarItem(id){
        const filterItem = cartList.filter((producto) => producto.id !== id)
        setCartList(filterItem)
    }
    
    
   
    function vaciarCarrito (){
        setCartList([])
    }

    
    
    console.log(cartList)
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            sumaTotal,
            cantidadItems,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>

    )
}

