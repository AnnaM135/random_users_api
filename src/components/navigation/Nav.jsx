import React from 'react';
import "./nav.css"
import {Link} from "react-router-dom"

function Nav() {
    return (
        <div className = "header">
            <div className = "header_logo">
                <img className = "header_logo-img" src ="./images/logo.svg" alt = "logo"/>
            </div>
            <nav className = "navbar">
                <ul className = "navbar_list">
                    <li className = "navbar_list-item">
                        <a className = "navbar_list-itemLink">About</a>
                    </li>
                    <li className = "navbar_list-item">
                        <Link to="/users" className = "navbar_list-itemLink">Users</Link>
                    </li>
                    <li className = "navbar_list-item">
                        <a className = "navbar_list-itemLink">How I work</a>
                    </li>
                    <li className = "navbar_list-item">
                        <a className = "navbar_list-itemLink">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
