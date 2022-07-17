import {useEffect, useState} from 'react'
import axios from 'axios'


const useFetchData = ({searchParams}: { searchParams: string }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const url = `https://autobooking.com/api/test/v1/search/${searchParams}`
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(url)
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }

        fetchData()
    }, [])

    return {
        data,
        loading,
    }
}

export default useFetchData
