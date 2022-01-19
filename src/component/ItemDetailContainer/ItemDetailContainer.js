import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import { llamada} from '../api'
import ItemDetail from "./ItemDetail/ItemDetail"


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
           {loading? <h3>Cargando...</h3>
            :
           <ItemDetail producto={productos}/>}
        </div>
    )
}

export default ItemDetailContainer
