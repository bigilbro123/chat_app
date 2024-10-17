import { useEffect, useState } from "react"

import backend from "../AIP/backend";


const useGetConverstion = () => {

    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState([]);
    const getconversation = async () => {
        setLoading(true)
        try {
            const res = await fetch(backend.backend + '/api/users/user', {
                method: 'GET',

                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)


            }
            setConversation(data)
            setLoading(false)
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(() => {
        getconversation()
    }, [])
    return { conversation, loading }
}

export default useGetConverstion