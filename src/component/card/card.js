import { Link } from "react-router-dom";
import { useCartContext } from "../cardContext/CardContext";
import imagen from './imagen.png'





const Cart = () => {
    const {cartList ,vaciarCarrito, eliminarItem, sumaTotal, subTotal} = useCartContext ()

    return(
      
        <>
           {cartList.length === 0 ? (
             <div>
               <hr></hr>
               <hr></hr>
               <hr></hr>
               <h2>No hay productos aún</h2>
               <hr></hr>
               <Link to='/categoria'><button>Continuar en la Tienda</button></Link>
             </div>
             ):(

           <>
            {cartList?.map(prod =><div key={prod.id} className='col-md-4'>
                            <div className='card w-50 mt -5'>
                              <div className='card-header'>
                                {`Producto: ${prod.nombre} - cantidad: ${prod.cantidad} - Precio: ${prod.precio}`}
                              </div>
                              <div className='card-body'>
                                <img src={prod.imageUrl} alt='1' className='w-50'/>
                              </div>
                              <div>
                              <button onClick={() =>eliminarItem(prod.id)}>Eliminar item</button>
                              </div>
                              <div><h3>Total : {()=>subTotal(prod.id)}</h3></div>
                                </div>
                              </div> 
                              )}
                              <div>
                              <Link to='/categoria'><button>Continuar en la Tienda</button></Link>
                              <button onClick={vaciarCarrito}>vaciarCarrito</button>
                              <div><h3>Total : {sumaTotal()}</h3></div>
                                </div>
          </>   
             )}                 
        </>
    )
}

export default Cart


