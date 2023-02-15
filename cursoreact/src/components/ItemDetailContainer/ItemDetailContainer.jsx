import { useParams } from "react-router-dom"
import "../../css/ItemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = () => {

    const { idProducto } = useParams()

    return (
        <div className="d-flex pt-4 d-flex justify-content-evenly">
            <div className="card w-25 mt-3">
                <div className="card-body">
                    ItemDetailContainer id: {idProducto}
                </div>
            </div>
            <ItemCount inital={1} stock={10} onAdd={()=>{}} />

        </div>

    )
}

export default ItemDetailContainer