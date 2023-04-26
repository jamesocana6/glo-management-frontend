import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Person } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../reduxStore/reducers/authSlice";
import {
    fetchChaptersAsync,
    selectChapters,
    selectIsLoading,
} from "../../reduxStore/reducers/chapterSlice";
import "./style.css";
import kplLogo from "../../assets/kplLogo.png";

const NavBar = () => {
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);
    const chapters = useSelector(selectChapters);
    const isFetchingChapters = useSelector(selectIsLoading);
    const status = isFetchingChapters ? "Loading Chapters..." : "Chapters";

    useEffect(() => {
        dispatch(fetchChaptersAsync());
    }, [dispatch]);


    const loaded = () => {
        if (!chapters) return [];
        const chapterLinks = Object.values(chapters).map((chapter) => (
          <Link className="dropdown-item" to={`/chapter/${chapter.id}`} chapter_nb={chapter.chapter_nb}>
            {chapter.chapter_school_txt}
          </Link>
        ));
        return <ul className="dropdown-menu">{chapterLinks}</ul>;
      };

    const loading = () => {
        return (
            <ul>
                <li>{status}</li>
            </ul>
        );
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ padding: '2px' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/dashboard"}>
                        <img src={kplLogo} style={{ width: '150px' }} />
                    </Link>
                    <div>
                        <ul className="navbar-nav justify-content-end">
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    National Administration
                                </a>
                                <ul className="dropdown-menu">
                                    <li>&nbsp;Chapter Administration</li>
                                    <li><a className="dropdown-item" href="#">Add a Chapter</a></li>
                                    <li><a className="dropdown-item" href="#">Change Status</a></li>
                                    <li>&nbsp;Member Administration</li>
                                    <li><a className="dropdown-item" href="#">Manage Users</a></li>
                                    <li><a className="dropdown-item" href="#">Disaffiliation Process</a></li>
                                    <li>&nbsp;Announcements</li>
                                    <li><a className="dropdown-item" href="#">Manage National Communications</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chapter Administration
                                </a>
                                <ul className="dropdown-menu">
                                <Link className="dropdown-item" to={`/chapter/`}>Roster</Link>
                                    <li><a className="dropdown-item" href="#">Announcements</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Member Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Apply for a Scholarship</a></li>
                                    <Link className="dropdown-item" to={"/findcoach"}>Find a Coach</Link>
                                    <Link className="dropdown-item" to={"/jobhub"}>Job Hub</Link>
                                </ul>
                            </li>
                            {/* Chapters Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chapters
                                </a>
                                {chapters ? loaded() : loading()}
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Giving Back
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sxster's Businesses</a></li>
                                    <li><a className="dropdown-item" href="#">Become a Coach</a></li>
                                    <li><a className="dropdown-item" href="#">Join National Leadership</a></li>
                                    <Link className="dropdown-item" to={"/donations"}>Donate</Link>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Person size={25} />
                                </a>
                                <ul className="dropdown-menu">
                                    <Link className="nav-link" to={"/profile"}>Edit Profile</Link>
                                    <div onClick={() => dispatch(logoutAsync(token))}>
                                        <Link className="dropdown-item" to={"/login"}>Logout</Link>
                                    </div>
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