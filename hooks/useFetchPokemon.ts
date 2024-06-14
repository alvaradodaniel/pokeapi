import { useEffect, useState } from "react"

const useFetchPokemon = ( url ) => {

    const [info, setInfo ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    console.log("url")
    console.log(url)

    useEffect(() => {
        const fetchPokemon = async () => {
            try{
                setLoading(true)
                const response = await fetch(url) 
                if(response.status != 200){
                    throw new Error("Error en la peticion")
                }
                const data = await response.json()
                setInfo(data)
                
            }catch(error){
                setError(error as any)
            }finally{
                setLoading(false)
            }
        }
        fetchPokemon()
    },[url])

    return { info, loading, error };
}

export default useFetchPokemon
    
