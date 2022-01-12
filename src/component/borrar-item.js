import React from 'react'
import { useEffect, useState } from 'react'
import { llamada } from './api'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagen from './3.png'


function Item() {
  const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
  useEffect(()=>{
      llamada
      .then((resp) => {
        setProductos(resp);
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
    },2000)

    return (
      <center>
      {loading ? <h3>Cargando...</h3>
      :
      productos.map(prod =><div key={prod.id} className='col-md-4'>
                            <div className='card w-100 mt -5'>
                              <div className='card-header'>
                                Producto: {`${prod.nombre} - stock: ${prod.stock} - Precio: $${prod.precio}`}
                              </div>
                              <div className='card-body'>
                                <img src={imagen} alt='1' className='w-50'/>
                              </div>
                              <div className='card-footer'>                              
                                  <booton className='btn btn-outline-primary btn-block'>
                                    Agregar al carrito
                                  </booton>
                              </div>
                              </div> 

      </div>)}
      
  </center>
    )
}


export default Item
