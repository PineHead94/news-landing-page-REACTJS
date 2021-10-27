import { useEffect, useState } from 'react';

const UseFetch = (url) => {

    const [ isLoading,setIsLoading ] = useState(false)
    const [ data,setData ] = useState([])
    const [ error,setError ] = useState('')
    useEffect(()=>{
        const fetcher = async (url) => {
            setIsLoading(true)
            await fetch(url)
            .then(res => { return res.json() })
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
            })
        }
        fetcher(url)
    },[url])


    return { isLoading,data,setData,error }
}
 
export default UseFetch;