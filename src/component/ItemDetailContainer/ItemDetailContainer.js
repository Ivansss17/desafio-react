import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import { llamada} from '../api'
import ItemDetail from "./ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"


function ItemDetailContainer() {
    
    const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {detalleId} = useParams()

  
    useEffect(()=>{
       if (detalleId){
        llamada 
        
        .then((resp) => 
            setProductos(resp.find(prod => prod.nombre === detalleId))
                
          )
          .finally(()=>setLoading(false))
       
       }
     
        
      
      
      },[detalleId])
    
    return (
        <div>
           {loading? <><Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
  </>
            :
           <ItemDetail producto={productos}/>}
        </div>
    )
}

export default ItemDetailContainer
