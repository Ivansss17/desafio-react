
import Item from './Item'

 function ItemList({productos}) {
     console.log(productos)
    return (
        <>
        {productos.map(prod => <Item prod={prod}/>)}
        </>
    )
}
export default ItemList