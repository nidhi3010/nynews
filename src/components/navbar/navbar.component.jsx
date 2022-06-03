import React from "react";
import SideDrawer from "../side-drawer/side-drawer.component";

import './navbar.styles.scss';




const Navbar = () => (
    <div className="navbar">
        <div className="button-bar">
            <SideDrawer />
            <ul>
                <li><a href="#">U.S</a></li>
                <li><a href="#">INTERNATIONAL</a></li>
                <li><a href="#">CANADA</a></li>
                <li><a href="#">Español</a></li>
                <li><a href="#">中文</a></li>
            </ul>
            <div className="buttons">
                <button className="subscribe">Subscribe for ₹600/year</button>
                <button className="login">Log in</button>
            </div>
        </div>
    </div>

)

export default Navbar;

