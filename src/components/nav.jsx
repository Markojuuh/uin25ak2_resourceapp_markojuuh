import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="tabs">
                <li><Link to="/html">HTML</Link></li>
                <li><Link to="/css">CSS</Link></li>
                <li><Link to="/javascript">Jvascript</Link></li>
                <li><Link to="/react">React</Link></li>
                <li><Link to="/sanity"></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;