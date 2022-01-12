import imagen from './imagen.png'

function Item({prod}) {
    return (
        <div key={prod.id} className='col-md-4'>
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

      </div>
    )
}

export default Item
