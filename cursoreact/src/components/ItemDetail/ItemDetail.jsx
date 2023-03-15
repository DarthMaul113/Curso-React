import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "../../css/ItemDetail.css"

const ItemDetail = ({ product }) => {
    const [isCount, setIsCount] = useState(true)
    const { agregarCart } = useCartContext()

    function onAdd(cantidad) {
        console.log(cantidad)
        // console.log(product)
        agregarCart({ ...product, cantidad })
        setIsCount(false)
    }

    return (
        <div>
            <div className="container">
                <div className="card w-50 m-5 mb-4 shadow">
                    <div className="card-header">
                        {product.name}
                    </div>
                    <div className="card-body">
                        <img src={product.photo} alt='image' className="w-50" />
                        <div>
                            <p className="info">Nombre: {product.name}</p>
                            <p className="info">Categoría: {product.type}</p>
                            <p className="info">Precio: {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</p>
                        </div>
                    </div>
                </div>
                {isCount ?
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    :
                    <>
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        {/* <div className="cartbtns">
                            <Link to='/cart' className="cartbtn btn btn-outline-light w-25 text-light">Ir a cart</Link>
                            <Link to='/' className="cartbtn btn btn-outline-light w-25 text-light">Seguir Comprando</Link>
                        </div> */}
                    </>
                }
            </div>
        </div>
    )
}

export default ItemDetail