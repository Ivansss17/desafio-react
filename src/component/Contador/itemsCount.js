import React from 'react'
import { useState } from 'react'

function ItemsCount() {
    const btnMas = true
    const resta = true
    const [count, setCount] = useState(1)
    
   
   
    const sumar = () => {
        if (count != 0 & count <= 29){
        setCount(count +1)
        console.log(count)

    }}
    const restar = ()=>{
        if (count >= 2 & count <=30){
        setCount(count-1)
        console.log(count)
    }}
    const agregar = ()=>{
        alert('Usted agrego: '+ count +'unidades')
    }
    return (
        <div>
            <h3>cantidad {count}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={agregar}>Agregar a carrito</button>
            <h3>Stock: 30 unidades.</h3>
        </div>
    )
}

export default ItemsCount
