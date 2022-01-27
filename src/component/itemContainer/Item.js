import imagen from '../img/imagen.png'
import  { Button, ModalBody, ModalFooter,  ModalTitle,  }  from  'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Item({prod}) {
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (
      
    

        <>
       
         <div key={prod.id} className='col-md-4'>
                            <div className='card w-100 mt -5'>
                              <div className='card-header'>
                                Producto: {`${prod.nombre} - stock: ${prod.stock} - Precio: $${prod.precio}`}
                              </div>
                              <div className='card-body'>
                              <img src={prod.imageUrl} alt='1' className='w-50'/>
                              </div>
                              <div className='card-footer'> 
                              <Link to={`/detalle/${prod.id}`}><Button>Comprar</Button></Link>
                              <Button variant="primary" onClick={handleShow}>
                                Detalle
                              </Button>

                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <ModalTitle><img src={prod.imageUrl} alt='1' className='w-50'/></ModalTitle>
                                </Modal.Header>
                                <ModalBody>Producto: {`${prod.nombre} - stock: ${prod.stock} - Precio: $${prod.precio}`}</ModalBody>
                                <ModalFooter>
                                  <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                  </Button>
                                  <Button variant="primary" onClick={handleClose}>
                                    Aceptar
                                  </Button>
                                </ModalFooter>
                              </Modal>  
                              </div>
                              </div> 

      </div> 
      </>
    )
}

export default Item
