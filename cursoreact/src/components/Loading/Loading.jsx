import { useEffect } from "react"

export const Loading = ()=> {
    useEffect(()=>{
        // acciones
        return () => console.log('desmontado loading...')
    })
    return (
        <h2 className="mt-2">Cargando ...</h2>
    )
}