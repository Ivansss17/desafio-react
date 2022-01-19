import imagen from './imagen.png'
import {useState} from 'react'
import ItemsCount from '../../Contador/itemsCount'
import { CardImg, CardBody} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
/* import {CardBody} from 'react-bootstrap-CardBody'
import {CardText} from 'react-bootstrap-CardText'
import {CardTitle} from 'react-bootstrap-CardTitle' */


function ItemDetail({producto}) {
    console.log(producto)
/* const [show, setShow] = useState(true) */
 /* const { nombre, stock, precio} = producto  */
/* const onAdd= () =>{
  setShow(false)
} */

    return (
        
       <div key={producto.id} className='col-md-4'>
                            <div className='card w-50 mt -5'>
                              <div className='card-header'>
                                {`Producto: ${producto.nombre} - stock: ${producto.stock} - Precio: ${producto.precio}`}
                              </div>
                              <div className='card-body'>
                                <img src={imagen} alt='1' className='w-50'/>
                              </div>
                              <ItemsCount stock={producto.stock} prod={producto}/>
                              </div> 

                              
                               
  


    </div> 
   

    )
}

export default ItemDetail
