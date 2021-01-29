import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiBookAura } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Header.css"


function Header() {
    /* const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);*/
    return ( 
        <div>
           <header>
               {/* <Link to = "/" className="main-nav-logo">
                        <GiBookAura className="main-nav-icon" />
               </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
    </div>*/}

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
