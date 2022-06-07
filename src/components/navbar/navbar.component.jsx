import React from "react";
import CurrentDate from "../current-date/current-date.component";
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
        <div className="title-bar">
            <div className="date-paper">
                <CurrentDate />
                <a className="today-paper" href="#">Today's Paper</a>
            </div>
            <a className="title" href="#">The New York Times</a>
            <div className="sun-temp">
                <img className="sun-icon" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75176/sun-icon-clipart-xl.png" />
                <div className="tempreture">
                    <span className="tem-1">33°C</span>
                    <span className="tem-2">35°</span>
                    <span className="tem-3">28°</span>

                </div>
            </div>
        </div>
    </div>


)

export default Navbar;




