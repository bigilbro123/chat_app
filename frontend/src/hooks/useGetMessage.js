import { useEffect, useState } from "react"
import useConversation from "../zustand/useConverSation"
import backend from "../AIP/backend"

const useGetMessage = () => {

    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        const getmessage = async () => {
            setLoading(true)
            try {

                const res = await fetch(backend.backend + `/api/message/${selectedConversation._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                })
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)

                }
                setMessages(data)
            } catch (error) {
                throw new Error(error)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getmessage();
    }, [selectedConversation?._id, setMessages])
    return { messages, loading }
}

export default useGetMessage