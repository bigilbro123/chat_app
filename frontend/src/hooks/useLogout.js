import { useState } from "react"
import backend from "../AIP/backend"
import { useAuthContext } from "../context/AthuContext"
import useConversation from "../zustand/useConverSation"


const useLogout = () => {
    const { setSelectedConversation } = useConversation()

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch(backend.backend + '/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem('chat-user')
            setSelectedConversation(null)
            setAuthUser(null)
        } catch (error) {
            throw new Error(error)
        } finally {
            setLoading(false)
        }
    }
    return { loading, logout }
}

export default useLogout