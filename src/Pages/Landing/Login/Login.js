import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ handleChange, handleLogin }) => {
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
                            <form
                                className="needs-validation"
                                onSubmit={handleLogin}
                            >
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    className="input-box"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="input-box"
                                    required
                                />
                                <button className="submit-btn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login;