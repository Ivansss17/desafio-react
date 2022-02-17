import React from 'react'
import CardsWidget from './CardsWidget'
import { Container, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'



function NavBar() {
    
  return (  
       
            <div className='divMenu'>
            
            <Navbar bg="dark" variant="dark" sticky="top">
               <Container>
               <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
               <Nav className="me-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                 <Nav.Link href="/categoria">Categorias</Nav.Link>
                 <Nav.Link href="/categoria/hombre">Hombre</Nav.Link>
                 <Nav.Link href="/categoria/mujer">Mujer</Nav.Link>
               </Nav>
               <Nav.Link href='/card'><CardsWidget/></Nav.Link>
               </Container>
            </Navbar>
             
            
        </div> 
        
    )
}

export default NavBar
