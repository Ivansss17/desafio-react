
import { useEffect, useState } from 'react'
import { llamada } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './ItemList'

  


const SaludoMenu = ({saludo}) =>{
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
    useEffect(()=>{
        llamada
        .then((resp) => {
          setProductos(resp)
          
        })
        .catch((err) => console.log(err))
        .finally(()=>setLoading(false))
      },2000)


    return(
        <div>
            <h3>{saludo}</h3>
            {loading? <h3>Cargando...</h3>
            :
            <ItemList productos={productos}/>
} 
        </div>
    )
}
export default SaludoMenu