import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = ({ props }) => {
    const [chapters, setChapters] = useState(null)

    const getChapters = async () => {
        const response = await fetch("http://localhost:8000/api/chapters/")
        const data = await response.json()

        setChapters(data)
    }


    useEffect(() => {
        getChapters()
    }, [])

    console.log(chapters)

    const loaded = () => {
        let allChapters = chapters.map((chapter) => {
            return (
                <li><a className="dropdown-item" href="#">{chapter.chapter_school}</a></li>
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
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="./dashboard">Navbar</a>
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
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
}

export default NavBar;