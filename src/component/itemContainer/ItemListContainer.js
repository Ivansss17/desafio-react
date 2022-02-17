
import { useEffect, useState } from 'react'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './ItemList'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
  


const ListProductos = () =>{
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  
    useEffect(()=>{
      
      if (categoriaId) {

        const db = getFirestore ()
        const queryProducts = query(collection(db, 'productos'), where('categoria', '==' , categoriaId))
        getDocs (queryProducts)
         .then ((resp) => setProductos(resp.docs.map((prod)=>({id : prod.id, ...prod.data()}))))
         .finally(()=>setLoading(false))
        
      } else {
        const db = getFirestore ()
        const queryProducts = collection(db, 'productos')
        getDocs (queryProducts)
        .then ((resp) => setProductos(resp.docs.map((prod)=>({id : prod.id, ...prod.data()}))))
        .finally(()=>setLoading(false))
      }
    
 
      
      },[categoriaId])


    return(
        <>
           
            {loading? <><Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
  </>
            :
            
            <ItemList productos={productos} />
} 
        </>
    )
}
export default ListProductos

