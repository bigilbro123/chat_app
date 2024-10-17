import { useState } from "react"
import backend from "../AIP/backend"
import { useAuthContext } from "../context/AthuContext"
import toast, { } from "react-hot-toast"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (userName, password) => {
        if (!userName || !password) {
            return toast.error('fill the field')

        }
        if (password.length < 6) {
            return toast.error('Password must contain at least 6 characters')
        }

        try {
            setLoading(true)

            const res = await fetch(backend.backend + '/api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, password }) // Corrected this part
            })

            const data = await res.json()
            if (data.error) {
                toast.error(data.error)
                throw new Error(data.error)
            }
            localStorage.setItem('chat-user', JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            throw new Error(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogin
