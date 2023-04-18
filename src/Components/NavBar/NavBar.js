import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Person } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../reduxStore/reducers/authSlice";
import {
  fetchChaptersAsync,
  selectChapters,
  selectIsLoading,
  selectError,
} from "../../reduxStore/reducers/chapterSlice";
import "./style.css";
import kplLogo from "../../assets/kplLogo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const chapters = useSelector(selectChapters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchChaptersAsync());
  }, [dispatch]);

  const handleLogout = async (token) => {
    try {
      await dispatch(logoutAsync(token));
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const loaded = () => {
    const chapterNames = Object.values(chapters).map((chapter) => (
      <li key={chapter.id}>
        <a className="dropdown-item" href="#">
          {chapter.chapter_school_txt}
        </a>
      </li>
    ));
    return <ul className="dropdown-menu">{chapterNames}</ul>;
  };
  

  const loading = () => {
    return (
      <ul>
        <li>Loading Chapter...</li>
      </ul>
    );
  };
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
                                    Giving Back
                                </a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to={"/donations"}>Donations</Link>
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