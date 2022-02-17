import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../cardContext/CardContext";
import Resumen from "../Resumen/Resumen";
import { Formik } from 'formik'





const Cart = () => {
    const {cartList ,vaciarCarrito, eliminarItem, sumaTotal} = useCartContext ()
    const [condicional, setCondicional] = useState(false)
    const [ordenId, setOrdenId] = useState({});
    const  [dataForm, setDataForm] = useState({
      nombre:'',
      email:'',
      email2:'',
      tel:''
    })

    const realizarCompra = async (e) => {
      e.preventDefault()
      let orden = {}

      orden.buyer = dataForm
      orden.total = sumaTotal()

      orden.items = cartList.map(cartItem =>{
        const id = cartItem.id
        const nombre = cartItem.nombre
        const cantidad = cartItem.cantidad
        const precio = cartItem.precio * cartItem.cantidad

        return {id, nombre, cantidad, precio}
        
      })
        
        const db = getFirestore()
        const ordenCollection = collection (db , 'ordenes')
        await addDoc (ordenCollection, orden)
        .then (resp=> setOrdenId(resp.id))
        .catch (err => console.log(err))
        .finally (()=> setDataForm({nombre:'',
        email:'',
        email2:'',
        tel:''},vaciarCarrito(),setCondicional(true) ))
       

    }

    function handlechange (e){

      setDataForm({
        ...dataForm,
      [e.target.name] : e.target.value
      })

    }

    return(
      <>{ condicional ?
           <Resumen idOrden={ordenId} />
           :
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
                                </div>
                              </div> 
                              )}
                              <div>
                              <Link to='/categoria'><button>Continuar en la Tienda</button></Link>
                              <Formik
                              validate={(valores )=>{
                                let errores = {}

                                if(!valores){
                                  errores.nombre = 'por favor ingrese un nombre'
                                  errores.email = 'por favor ingrese un correo'
                                  errores.tel = 'por favor ingrese un numero de telefono'
                                  
                                }
                                return errores
                              }}
                              >
                                {({ handleBlur, errors})=>(
                                  <form onSubmit={realizarCompra}>
                                    
                                  <input name="nombre" 
                                     type="text" 
                                     placeholder="ingrese su nombre" 
                                     onChange={handlechange}
                                     value={dataForm.nombre}
                                     
                                     onBlur={handleBlur}/>
                                     {errors.nombre && <div>{errors.nombre}</div>}
                                     <br></br>
     
     
                                   <input 
                                       name="email" 
                                       type="email" 
                                       placeholder="@mail.com" 
                                       onChange={handlechange}
                                       value={dataForm.email}
                                       onBlur={handleBlur}/>
                                       {errors.email && <div>{errors.email}</div>}
                                   <br></br>

                                   <input 
                                       name="email2" 
                                       type="email" 
                                       placeholder="@mail.com" 
                                       onChange={handlechange}
                                       value={dataForm.email2}
                                       onBlur={handleBlur}/>
                                       {errors.email && <div>{errors.email}</div>}

                                   <br></br>
                                   <input 
                                       name="tel" 
                                       type="tel"
                                       placeholder="tel"
                                       onChange={handlechange}
                                       value={dataForm.tel}
                                       onBlur={handleBlur}/> 
                                       {errors.tel && <div>{errors.tel}</div>}    
                                   <br></br>                                 
                                   <button>Generar Orden</button>
                                   </form>
                                )}
                                
                                      </Formik>
                              <button onClick={vaciarCarrito}>vaciarCarrito</button>
                              <div><h3>Total : {sumaTotal()}</h3></div>
                              
                                </div>
          </>   
             )}  
             <>
             </>               
        </>
       } </>  
    )
}

export default Cart


