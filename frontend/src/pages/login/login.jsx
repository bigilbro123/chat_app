import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"
import { Toaster } from "react-hot-toast"


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loading, login } = useLogin()
    const handlelog = async (e) => {
        e.preventDefault();
        await login(username, password)

    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >

            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0" >
                <h1 className="text-3xl capitalize font-semibold text-center text-gray-300">
                    login
                    <span className="text-blue-500">chat app</span>
                </h1>

                <form>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">UserName</span>
                        </label>
                        <input value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">password</span>
                        </label>
                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />

                    </div>

                    <Link to={'/signup'} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">

                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button onClick={handlelog} className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
                    </div>
                </form>
            </div>
            <Toaster position="top-center"
                reverseOrder={false} />
        </div>

    )
}

export default Login