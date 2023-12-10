import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        // Error message if no email or password is provided 
        if(!email || !password) {
            setErrorMessage("Please provide both an email and a password.")
            return;
        }

        // Check if the email follows a valid format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

        setErrorMessage("")

    // Handle navigation
        navigate("/")
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
