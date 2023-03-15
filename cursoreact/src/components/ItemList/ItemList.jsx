import { memo } from "react"
import Item from "../Item/Item"
import { styleCards } from "../ItemListContainer/StyleCards.style"

const ItemList = memo(({ productos }) => {
    return (
        <div
            className="justify-content-center align-item-center"
            style={styleCards}
        >
            {
                productos.map( producto =>  <Item producto={producto} /> )
            }
        </div>
    )
})

export default ItemList