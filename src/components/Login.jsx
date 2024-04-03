import React, { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        loginUser(email, password)
            .then((r) => {
                setUser(r.user)
                console.log(r.user)
                navigate("/")
            })
            .catch((e) => {
                console.log(e)
            })
    }
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-5">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
