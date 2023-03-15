import { useState } from "react"
import { Link } from "react-router-dom"


const ItemCount = ({ initial= 1, stock=10, onAdd, consult}) => {

    const [count, setCount] = useState(initial)

    const sumar = ()=> {
        if (count<stock) {
            setCount(count+1)
        }
    }
    const restar = ()=> {
        if (count > initial) {
            setCount(count-1)
        }
    }
    consult = count
    return (
        <div className="card w-50 m-1 shadow" >
            <div className="card-body row">
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={restar}> - </button>

                </div>
                <div className="col">
                <center>
                <label>{count}</label>

                </center>

                </div>
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={sumar}> + </button>

                </div>
            </div>
            <div className="card-footer">
                <Link to='/cart'><button className="btn btn-outline-dark w-100" onClick={()=>onAdd(count)}>Agregar al carrito</button></Link>
            </div>


        </div>

    )
}

export default ItemCount