import imagen from '../../imagen.png'

function ItemDetail({producto}) {
    console.log(producto)
    return (
        
       <div key={producto.id} className='col-md-1'>
                            <div className='card w-50 mt -5'>
                              <div className='card-header'>
                                Producto: {`${producto.nombre} - stock: ${producto.stock} - Precio: $${producto.precio}`}
                              </div>
                              <div className='card-body'>
                                <img src={imagen} alt='1' className='w-50'/>
                              </div>
                              
                              </div> 

    </div> 
    )
}

export default ItemDetail
