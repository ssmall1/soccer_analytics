import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { login } from "../../store/session";
// import pitchImg from "../../resources/pitch.jpg";
import './Splash.css';
import logo from "../../resources/sa_logo_transparent.png";
import pulisic from "../../resources/pulisic.gif";
import fouls from "../../resources/fouls.png";
import shots from "../../resources/shots.png";

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

            <div className="splash-content-wrapper">
                <div id="header-container">
                    <div id="container1-messages">
                        <div id="container1-message">Welcome</div>
                        <div id="container1-submessage">to the cutting edge of soccer and European football analytics</div>
                    </div>
                    <div id="center-gif">
                        <img id="pulisic-gif" src={pulisic} alt="pulisic celebration"></img>
                    </div>
                    <div className="info-container">Now with data from the English Premier League, the world's top showcase of club football.</div>
                </div>

                <div className="features-wrapper">
                    <div className="feature-list open">
                        <div id="feature-list-header">Analyze matches with positional event data, the industry's most advanced and specific metrics.</div>
                        <div id="feature-list-subheader">Categories include:</div>
                    </div>
                    <div className="feature-list">
                        <img id="shots-chart" src={shots} alt="shots chart"></img>
                        <div className="chart-label">Shots</div>
                    </div>
                    <div className="feature-list">
                        <div className="chart-label">Passes</div>
                        <img id="fouls-chart" src={fouls} alt="fouls chart"></img>
                    </div>
                    <div className="feature-list close">
                        <div id="more">and more...</div>
                        <NavLink id="splash-signup" to="/sign-up">Get Started</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Splash;