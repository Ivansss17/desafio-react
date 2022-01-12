import React from 'react'
import CardsWidget from './CardsWidget'

function NavBar() {
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
        </div>
    )
}

export default NavBar
