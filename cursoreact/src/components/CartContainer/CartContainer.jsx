import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../css/CartContainer.css"

const CartContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repetirEmail: ''
    })
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

    const insertarOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        // validar formData
        order.buyer = formData
        order.isActive = true
        order.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
        order.total = precioTotal()


        //Firestore
        const firedb = getFirestore()
        const ordersCollection = collection(firedb, 'orders')

        // insertar en firestores - create
        addDoc(ordersCollection, order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => {
                vaciarCarrito()
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    repetirEmail: ''
                })
            })

    }

    const handleOnChange = (evt) => {


        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    return (
        <div className="infocart text-light">
            {cartList.map(producto => (
                <div key={producto.id}>
                    <img className="m-4" src={producto.photo} style={{ width: 200 }} />
                    <div>
                        Nombre: {producto.name} - Cantidad: {producto.cantidad} - Precio: {producto.price} {' '}
                        <button className="btn btn-danger m-1 pt-1" onClick={() => eliminarProducto(producto.id)}> <FontAwesomeIcon icon={faXmark} className="text-light" size="lg"></FontAwesomeIcon>  </button>
                    </div>


                </div>

            ))}
            <div>

            </div>
            <p>{precioTotal() !== 0 && `El precio Total es: ${precioTotal()}`}</p>
            <form onSubmit={insertarOrder} >
                <input
                    className="m-1"
                    type="text"
                    name="name"
                    placeholder="Ingrese el nombre"
                    onChange={handleOnChange}
                    value={formData.name}

                /><br />
                <input
                    className="m-1"
                    type="text"
                    name="phone"
                    placeholder="Ingrese el teléfono"
                    onChange={handleOnChange}
                    value={formData.phone}

                /><br />
                <input
                    className="m-1"
                    type="text"
                    name="email"
                    placeholder="Ingrese el email"
                    onChange={handleOnChange}
                    value={formData.email}

                /><br />
                <input
                    className="m-1"
                    type="text"
                    name="repetirEmail"
                    placeholder="Repetir el email"
                    onChange={handleOnChange}
                    value={formData.repetirEmail}

                /><br />

                <button className="btn btn-outline-success m-2" type="submit">Generar la orden</button>
            </form>

            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer
