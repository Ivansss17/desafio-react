import React from 'react'
import CardsWidget from './CardsWidget'
import {Link} from 'react-router-dom'
import { Container, NavbarBrand, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'


function NavBar() {
    
  return (  
       
            <div className='divMenu'>
            <h2>Bienvenidos a la tienda virtual</h2>
            <Navbar bg="dark" variant="dark" sticky="top">
               <Container>
               <NavbarBrand href="#home">E-commerce</NavbarBrand>
               <Nav className="me-auto">
                 <Link to="/">Home</Link>
                 <Link to="/categoria">Categorias</Link>
                
                 <Link to="/categoria/hombre">Hombre</Link>
                 <Link to="/categoria/mujer">Mujer</Link>
                 
                 
                 <br></br>
                 <Link to="#pricing">Contacto</Link>
               </Nav>
               <CardsWidget/>
               </Container>
            </Navbar>
             
            
        </div> 
        
    )
}

export default NavBar
