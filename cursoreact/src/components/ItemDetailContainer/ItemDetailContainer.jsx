import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


import "../../css/ItemDetailContainer.css"


const ItemDetailConainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProducto } = useParams()


    useEffect(()=>{
        const firedb = getFirestore()
        const queryDoc = doc(firedb, 'productos', idProducto)
        getDoc(queryDoc)
        .then(respProd => setProduct(  { id: respProd.id, ...respProd.data() }  ))
        .catch(err => console.error(err))
        .finally(()=> setLoading(false))
    },[])


    return (
        <>
            {loading ?
                <h2 className="mt-2">Cargando ...</h2>
                :
                <ItemDetail product={product} />}
        </>
    )
}

export default ItemDetailConainer