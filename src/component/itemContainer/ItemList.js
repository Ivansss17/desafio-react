
import Item from './Item'

 function ItemList({productos}) {
     
    return (
        <>
        {productos.map(prod => <Item prod={prod}/>)}
        </>
    )
}
export default ItemList