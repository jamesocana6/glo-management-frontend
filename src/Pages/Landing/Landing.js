import React from "react";
import Login from "./Login/Login";

const Landing = ({ handleChange, handleLogin }) => {
    return (
        <Login
            handleChange={handleChange}
            handleLogin={handleLogin}
        />
    )
}

export default Landing;