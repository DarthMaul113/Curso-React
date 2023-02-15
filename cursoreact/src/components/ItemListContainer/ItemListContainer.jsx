import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { prodFetch } from "../../utils/prodFetch";
import { styleCards } from "./StyleCards.style"
import "../../css/ItemListContainer.css"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()
console.log(idCategoria)

  useEffect(() => {
    if (idCategoria) {
      prodFetch()
        .then(resp => setProductos(resp.filter(producto => producto.categoria === idCategoria)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    } else {
      prodFetch()
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [idCategoria])

  return (
    <>
      {loading ?
        <h5 className="text-light">Cargando...</h5>
        :
        <div>
          <h2 className="text-light mt-3">{greeting}</h2>
          <div style={styleCards} className="item-container d-flex justify-content-evenly">
            {productos.map(producto => (
              <div key={producto.id} className="card w-25 mt-3">
                <div className="card-header">
                  Nombre: {producto.name}
                </div>
                <div className="card-body">
                  <img className="w-100" src={producto.foto} />
                  <br />
                  <label>Categoría: {producto.categoria}</label>
                  <label>Precio: {producto.price} </label>
                  <label>Stock: {producto.stock} </label>
                </div>
                <div className="card-footer">
                  <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                  </Link>
                </div>

              </div>
            ))
            }
          </div>
        </div>
      }
    </>
  );
};

export default ItemListContainer;