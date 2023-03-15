import { memo } from "react"
import { Link } from "react-router-dom"
import "../../css/Item.css"


const Item = memo(({producto}) => {

    return (
        <div key={producto.id} className="card w-25 m-5 shadow">
            <div className="card-header">
               {producto.name}
            </div>
            <div className="card-body">
                <img className="w-100" src={producto.photo} />
                <br/>
                <p className="info">Categoría: {producto.type}</p>
                <br/>
                <p className="info">Precio: {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(producto.price)}</p>
                <br/>
                <p className="info">Stock: {producto.stock}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    )
})




export default Item