import imagen from './imagen.png'
import {useState} from 'react'
import ItemsCount from '../../Contador/itemsCount'
import { CardImg, CardBody} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../cardContext/CardContext'
/* import {CardBody} from 'react-bootstrap-CardBody'
import {CardText} from 'react-bootstrap-CardText'
import {CardTitle} from 'react-bootstrap-CardTitle' */


function ItemDetail({producto}) {

  const {agregarAlCarrito,subTotal} = useCartContext()
    
const [show, setShow] = useState(true) 
 
const onAdd= (contador) =>{
  setShow(false)
  agregarAlCarrito({...producto, cantidad: contador})
  

}

    return (
        
       <div key={producto.id} className='col-md-4'>
                            <div className='card w-50 mt -5'>
                              <div className='card-header'>
                                {`Producto: ${producto.nombre} - stock: ${producto.stock} - Precio: ${producto.precio}`}
                              </div>
                              <div className='card-body'>
                                <img src={imagen} alt='1' className='w-50'/>
                              </div>
                              {show ? <ItemsCount stock={producto.stock} prod={producto} onAdd={onAdd}/>: 
                              <div>
                                <Link to='/categoria'><button>Continuar en la Tienda</button></Link>
                                <Link to='/card'><button>Terminar compra</button></Link>
                                </div>}
                              </div> 
                              {/* <Card style={{ width: '18rem' }}>
  <CardImg variant="top" src="holder.js/100px180" />
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <Button variant="primary">Go somewhere</Button>
  </CardBody>
</Card> */}
                              
                               
  


    </div> 
   

    )
}

export default ItemDetail
