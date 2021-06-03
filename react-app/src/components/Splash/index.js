import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
// import { login } from "../../store/session";
// import pitchImg from "../../resources/pitch.jpg";
import './Splash.css';
import logo from "../../resources/sa_logo_transparent.png";

const Splash = () => {

    return(
        <>
            <div className="splash-nav">
                <img id="logo-img" src={logo}></img>

                <div className="nav-links">
                    <a href="https://github.com/ssmall1/soccer_analytics">
                        Github Repository
                    </a>
                    <a href="https://www.linkedin.com/in/schuler-small/">
                        Connect With Me
                    </a>
                </div>
            </div>

            <div className="splash-body">
                <div id="body-images-container">

                </div>
                {/* <div className="splash-auth-links">
                    <NavLink to="/sign-in">Sign-in</NavLink>
                    <NavLink to="/sign-up">Sign-up</NavLink>
                </div>

                <div className="welcome-text">
                    What it dooooo
                </div> */}

            </div>
        </>
    )
}

export default Splash;