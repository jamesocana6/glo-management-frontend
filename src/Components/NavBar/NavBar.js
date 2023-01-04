import React from "react";

const NavBar = ({ props }) => {
    return (
        <>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <ul id="dropdown2" className="dropdown-content">
                <li><a href="#!">a</a></li>
                <li><a href="#!">b</a></li>
                <li className="divider"></li>
                <li><a href="#!">c</a></li>
            </ul>
            <ul id="dropdown3" className="dropdown-content">
                <li><a href="#!">1</a></li>
                <li><a href="#!">2</a></li>
                <li className="divider"></li>
                <li><a href="#!">3</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo left">Logo</a>
                    <ul className="right">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">My Chapter<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Nationals<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown3">All Events<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href="/">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;