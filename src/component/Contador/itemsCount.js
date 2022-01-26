import React from 'react'
import { useState } from 'react'

function ItemsCount({stock, prod, onAdd}) {
    const btnMas = true
    const resta = true
    const [count, setCount] = useState(1)
    
    const sumar = () => {
        if (stock != 0 & count<= stock-1 ){
        setCount(count +1)
        console.log(count)

    }}
    const restar = ()=>{
        if (count >= 2 & count <= stock ){
        setCount(count-1)
        console.log(count)
    }}
    const agregar = ()=>{
        alert('Usted agrego: '+' '+ count + ' ' + prod.nombre +'/s' )
        
    }
   
    /* const sumar = () => {
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
    } */
    return (
        <div>
            <h3>Cantidad {count}</h3>
            <button onClick={restar}>-</button>
            {/* <button onClick={agregar}>Agregar a carrito</button> */}
            <button onClick={()=>onAdd(count)}>Agregar a carrito</button>
            <button onClick={sumar}>+</button>
            <h3>Stock: {stock} unidades.</h3>
        </div>
    )
}

export default ItemsCount
