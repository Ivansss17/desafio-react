
import { useState } from 'react'

function ItemsCount({stock, onAdd}) {
   
    const [count, setCount] = useState(1)
    
    const sumar = () => {
        if (stock != 0 & count<= stock-1 ){
        setCount(count +1)
          

    }}
    const restar = ()=>{
        if (count >= 2 & count <= stock ){
        setCount(count-1)
        
    }}
    
    return (
        <div>
            <h3>Cantidad {count}</h3>
            <button onClick={restar}>-</button>
            <button onClick={()=>onAdd(count)}>Agregar a carrito</button>
            <button onClick={sumar}>+</button>
            <h3>Stock: {stock} unidades.</h3>
        </div>
    )
}

export default ItemsCount
