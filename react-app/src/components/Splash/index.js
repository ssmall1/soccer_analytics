import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { login } from "../../store/session";
// import pitchImg from "../../resources/pitch.jpg";
import './Splash.css';
import logo from "../../resources/sa_logo_transparent.png";
import pulisic from "../../resources/pulisic.gif";
import yedlin from "../../resources/yedlin.gif";

const Splash = () => {

    return(
        <>
            <div className="splash-nav">
                <NavLink to="/welcome">
                    <img id="logo-img" alt="logo" src={logo}></img>
                </NavLink>

                <div className="nav-auth-links">
                    <NavLink id="splash-signin" to="/login">Log In</NavLink>
                    <NavLink id="splash-signup" to="/sign-up">Sign Up</NavLink>
                </div>

                <div className="nav-links">
                    <a href="https://github.com/ssmall1/soccer_analytics" rel="noopener noreferrer" target="_blank">
                        Github Repository
                    </a>
                    <a href="https://www.linkedin.com/in/schuler-small/" rel="noopener noreferrer" target="_blank">
                        Connect With Me
                    </a>
                </div>
            </div>

            <div className="splash-header">
                <div id="header-container1">
                    <div id="container1-message">Welcome</div>
                    <div id="container1-submessage">to the cutting edge of soccer and european football analytics</div>
                    <div id="right-gif">
                        <img id="pulisic-gif" src={pulisic} alt="pulisic celebration"></img>
                    </div>
                </div>
            </div>

            <div className="info-container">Created with data from the English Premier League, the world's top showcase of club football</div>

            <div className="features-container">
                <div id="left-gif">
                    <img id="yedlin-gif" src={yedlin} alt="yedlin move"></img>
                </div>
                <div id="features-title">Analyze matches based on:</div>
                <ul id="features-list">
                    <li>Goals</li>
                    <li>Possession</li>
                    <li>Positional player data</li>
                    <li>Passes, shots, and more</li>
                </ul>
            </div>
        </>
    )
}

export default Splash;