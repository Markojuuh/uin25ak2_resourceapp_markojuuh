import React from "react";
import {NavLink} from "react-router-dom";
import "../assets/styles/nav.scss"

const Nav = () => {
    return (
        <nav>
            <ul className="tabs">
                <li><Link to="/html">HTML</Link></li>
                <li><Link to="/css">CSS</Link></li>
                <li><Link to="/javascript">Javascript</Link></li>
                <li><Link to="/react">React</Link></li>
                <li><Link to="/sanity">Sanity and Headless CMS</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;