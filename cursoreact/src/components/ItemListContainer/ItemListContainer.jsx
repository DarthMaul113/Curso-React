import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import "../../css/ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  useEffect(() => {
    const firedb = getFirestore()
    const queryCollection = collection(firedb, 'productos')

    const queryFilter = idCategoria ? query(queryCollection, where('type', '==', idCategoria)) : queryCollection

    getDocs(queryFilter)
      .then(respCollection => setProductos(respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [idCategoria])


  return (
    <>

      {loading ?
        <Loading />
        :
        <>
          <h2 className="mt-2">{greeting}</h2>
          <ItemList productos={productos} />
        </>
      }
    </>
  )
};

export default ItemListContainer;