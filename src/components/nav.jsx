import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/nav.scss"

const Nav = () => {
    return (
        <nav>
            <ul className="tabs">
                <li><Link to="/html" className="tab">HTML</Link></li>
                <li><Link to="/css" className="tab">CSS</Link></li>
                <li><Link to="/javascript" className="tab">Javascript</Link></li>
                <li><Link to="/react" className="tab">React</Link></li>
                <li><Link to="/sanity" className="tab">Sanity and Headless CMS</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;