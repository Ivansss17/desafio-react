import {useEffect, useState} from "react"

import { llamada} from '../api'
import ItemDetail from "./ItemDetail/ItemDetail"


function ItemDetailContainer() {

    const [producto, setproducto] = useState({})
    useEffect(() => {
        llamada 
        .then(resp => setproducto(resp.find(prod => prod.id === 1 )))
        
    }, [])
    
    return (
        <div>
           hola
           <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer

