import { useCartContext } from '../cardContext/CardContext'
import imagen from '../img/2.png'
function CardsWidget() {

    const {cantidadItems} = useCartContext()

    return (
        <div>
            < img src={imagen}/><span>{cantidadItems()}</span>
        </div>
    )
}

export default CardsWidget
