import { useEffect, useState } from "react"
export const LoadApiProducts = (url) => {

    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            await fetch(url)
                .then(response => response.json())
                .then(json => setData(json))
                .catch(error => console.log(error))
        }
        fetchData()
    }, [])

    return data
}