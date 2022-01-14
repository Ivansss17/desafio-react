import React from 'react'
import CardsWidget from './CardsWidget'
import {Link} from 'react-router-dom'



function NavBar() {
    
  return (  
       
            <div className='divMenu'>
            <h2>Bienvenidos a la tienda virtual</h2>
            <nav className='navMenu'>
                <ul>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <li>productos</li>
                    <li>Contacto</li>
                    <Link to='/saludo'>
                    <CardsWidget/>
                    </Link>
                </ul>
            </nav>
        </div> 
        
    )
}

export default NavBar
