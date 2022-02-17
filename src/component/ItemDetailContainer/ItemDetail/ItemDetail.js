import imagen from './imagen.png'
import {useState} from 'react'
import ItemsCount from '../../Contador/itemsCount'
import { CardImg, CardBody} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../cardContext/CardContext'


function ItemDetail({producto}) {

  const {agregarAlCarrito,subTotal} = useCartContext()
    
const [show, setShow] = useState(true) 
 
const onAdd= (contador) =>{
  setShow(false)
  agregarAlCarrito({...producto, cantidad: contador})
  
  

}

    return (
        

 <>
 <Card key={producto.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto.imageUrl} />
  <Card.Body>
    <Card.Title>{producto.nombre}</Card.Title>
    <Card.Text>
    {`Producto: ${producto.nombre} - Stock: ${producto.stock} - Precio: ${producto.precio}`}
    </Card.Text>
    
  </Card.Body>
  {show ? <ItemsCount stock={producto.stock} prod={producto} onAdd={onAdd}/>: 
                              <div>
                                <Link to='/categoria'><button>Continuar en la Tienda</button></Link>
                                <Link to='/card'><button>Terminar compra</button></Link>
                                </div>}
</Card>
 </>
   

    )
}

export default ItemDetail
