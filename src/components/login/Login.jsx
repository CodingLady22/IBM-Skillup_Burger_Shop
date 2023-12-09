import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleClick = () => {
        if(!email || !password) {
           return setErrorMessage("Please provide both an email and a password.")
        } else alert('It works')

        setErrorMessage("")
    }
    return (
    <>
        <section className="login-box">
            <h3>login</h3>
            <div className="box">
                <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <div className="check">
                        <input type="checkbox" name="" id="" /><span>Remember me</span>
                    </div>
                    <a href="#">
                        Forgot password?
                    </a>
                </div>
                <Link to="/">
                    <button className="login-button" onClick={handleClick} type="submit">Sign in</button>
                </Link>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <p>Not a member? 
                <a href="#">Register</a>
            </p>
        </section>
    </>
    )
}

export default Login
