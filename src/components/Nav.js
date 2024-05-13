import React from "react";
import Logo from '../assets/img/logo.svg'

export default () => 
        <nav>
            <div className="nav-logo">
                <img src={Logo} className="logo"></img>
            </div>
            <button className="btn white">Try It Free</button>
        </nav>
    