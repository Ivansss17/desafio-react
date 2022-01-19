
import { useEffect, useState } from 'react'
import { llamada } from '../api'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './ItemList'
import { Button, Form, FormControl, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

  


const ListProductos = () =>{
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  
    useEffect(()=>{
       if (categoriaId){
        llamada 
        
        .then((resp) => 
            setProductos(resp.filter(prod => prod.categoria === categoriaId))
                
          )
          .finally(()=>setLoading(false))
       }else {
        llamada 
        .then((resp) => 
        setProductos(resp))
        .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
       }
     
        
      
      
      },[categoriaId])


    return(
        <div>
            <center>
            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">buscar</Button>
          </Form>
          </center>
          <br></br>
          <br></br>
          <br></br>
            {loading? <><Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
  </>
            :
            
            <ItemList productos={productos} />
} 
        </div>
    )
}
export default ListProductos