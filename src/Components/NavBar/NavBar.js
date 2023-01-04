import React from "react";

const NavBar = ({ props }) => {
    return (
        <>
            <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <ul id="dropdown2" class="dropdown-content">
                <li><a href="#!">a</a></li>
                <li><a href="#!">b</a></li>
                <li class="divider"></li>
                <li><a href="#!">c</a></li>
            </ul>
            <ul id="dropdown3" class="dropdown-content">
                <li><a href="#!">1</a></li>
                <li><a href="#!">2</a></li>
                <li class="divider"></li>
                <li><a href="#!">3</a></li>
            </ul>
            <nav>
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo left">Logo</a>
                    <ul class="right">
                        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">My Chapter<i class="material-icons right">arrow_drop_down</i></a></li>
                        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Nationals<i class="material-icons right">arrow_drop_down</i></a></li>
                        <li><a class="dropdown-trigger" href="#!" data-target="dropdown3">All Events<i class="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href="/">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;