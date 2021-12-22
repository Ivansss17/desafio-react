import React from 'react'
import CardsWidget from './CardsWidget'
import SaludoMenu from './ItemListContainer'
import ItemsCount from './itemsCount'




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
            <ItemsCount/>
        </div>
        
    )
}

export default Menu