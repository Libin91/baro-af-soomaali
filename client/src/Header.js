import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <div>
           <header>
                <ul className="main-nav">
                    <li><NavLink to ="/">Home</NavLink></li>
                    <li><NavLink to ="/about">About</NavLink></li>
                    <li><NavLink to = "/stories">Stories</NavLink></li>
                </ul>
            </header> 
        </div>
    )
}

export default Header
