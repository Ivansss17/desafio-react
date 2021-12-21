import React from 'react'
import CardsWidget from './CardsWidget'
import SaludoMenu from './ItemListContainer'




function Menu() {
    return (
        <div className='divMenu'>
            <h2>Bienvenidos a la tienda virtual</h2>
            <nav className='navMenu'>
                <ul>
                    <li>Home</li>
                    <li>productos</li>
                    <li>Contacto</li>
                    <CardsWidget/>
                </ul>
            </nav>
            <SaludoMenu saludo='hola mundo'/>
        </div>
        
    )
}

export default Menu