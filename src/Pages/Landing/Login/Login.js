import React, {useState} from "react";

const Login = ({ props }) => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const handleLogin = () => {
        console.log("Login")
        // if login successful, redirect to dashboard
        // else invalid username/password
    }

    return (
        <section className="home-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="promo-text-box">
                            <h1>GLO Landing Page</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, excepturi cumque? Distinctio voluptates ratione minus sint suscipit blanditiis corrupti repellat esse harum, debitis, officia illum tenetur, quasi ea dolor dolores.</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="lead-form">
                            <div className="title-box">
                                <h3>Welcome to GLO Management</h3>
                            </div>
                            <form action={handleLogin}>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    className="input-box"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="input-box"
                                />
                                <button type="button" className="submit-btn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login;