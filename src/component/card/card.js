import { Link } from "react-router-dom";
import { useCartContext } from "../cardContext/CardContext";
import imagen from './imagen.png'





const Cart = () => {
    const {cartList ,vaciarCarrito} = useCartContext ()

    return(
        <div>
           
            {cartList.map(prod =><div key={prod.id} className='col-md-4'>
                            <div className='card w-50 mt -5'>
                              <div className='card-header'>
                                {`Producto: ${prod.nombre} - stock: ${prod.cantidad} - Precio: ${prod.precio}`}
                              </div>
                              <div className='card-body'>
                                <img src={imagen} alt='1' className='w-50'/>
                              </div>
                                </div>
                              </div> )}
                              <div>
                              <Link to='/categoria'><button>Continuar en la Tienda</button></Link>
                              <button onClick={vaciarCarrito}>vaciarCarrito</button>
                                </div>
                              
        </div>
    )
}

export default Cart


{/* <Link to='/card'><button onClick={vaciarCarrito()}>vaciarCarrito</button></Link> */}