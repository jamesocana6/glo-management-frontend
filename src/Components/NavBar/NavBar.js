import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Person } from "react-bootstrap-icons";

import "./style.css";
import kplLogo from "../../assets/kplLogo.png"

const NavBar = ({ props, token }) => {
    const [chapters, setChapters] = useState(null)

    const getChapters = async () => {
        const response = await fetch("http://localhost:8000/api/chapters/")
        const data = await response.json()

        setChapters(data)
    }

    const handleLogOut = async () => {
        localStorage.clear()

        await fetch("http://127.0.0.1:8000/api/accounts/logout/", {
            method: "GET",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": "Token " + token.token
            },
        })
    }

    useEffect(() => {
        getChapters()
    }, [])

    // console.log(chapters)

    const loaded = () => {
        let allChapters = chapters.map((chapter) => {
            return (
                <li><a className="dropdown-item" href="#">{chapter.chapter_school_txt}</a></li>
            )
        })

        return (
            <ul className="dropdown-menu">
                {allChapters}
            </ul>
        )
    }

    const loading = () => {
        return (
            <ul>
                <li>Loading Chapter...</li>
            </ul>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ padding: '2px' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/dashboard"}>
                        <img src={kplLogo} style={{ width: '110px' }} />
                    </Link>
                    <div>
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Chapter
                                </a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to={"/dashboard"}>Dashboard</Link>
                                    <Link className="dropdown-item" to={"/findcoach"}>Find a Coach</Link>
                                    <Link className="dropdown-item" to={"/jobhub"}>Job Hub</Link>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nationals
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            {/* Chapters Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chapters
                                </a>
                                {chapters ? loaded() : loading()}
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Events
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Person size={25} />
                                </a>
                                <ul className="dropdown-menu">
                                    <Link className="nav-link" to={"/profile"}>Edit Profile</Link>
                                    <Link className="dropdown-item" to={"/login"} onClick={handleLogOut}>Logout</Link>
                                </ul>
                            </li>

                            {/* Profile */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/profile"}><Person size={25} /></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;