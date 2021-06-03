import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
// import { login } from "../../store/session";
// import pitchImg from "../../resources/pitch.jpg";
import './Splash.css';
import logo from "../../resources/sa_logo_transparent.png";
import dinho from "../../resources/dinho.gif";
import foul from "../../resources/foul.gif";
import freekick from "../../resources/freekick.gif";
import legs from "../../resources/legs.gif";
import lewy from "../../resources/lewy.gif";
import messi from "../../resources/messi.gif";
import pulisic from "../../resources/pulisic.gif";
import ronaldo from "../../resources/ronaldo.gif";
import save from "../../resources/save.gif";
import tackle from "../../resources/tackle.gif";
import yedlin from "../../resources/yedlin.gif";

const Splash = () => {

    return(
        <>
            <div className="splash-nav">
                <NavLink to="/welcome">
                    <img id="logo-img" src={logo}></img>
                </NavLink>

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
                    <div id="left-gif">
                        <img id="logo-img" src={foul}></img>
                    </div>

                    <div id="top-gifs">
                        <img id="logo-img" src={lewy}></img>
                        <img id="logo-img" src={freekick}></img>
                        <img id="logo-img" src={ronaldo}></img>
                        <img id="logo-img" src={messi}></img>
                        <img id="logo-img" src={pulisic}></img>
                    </div>

                    <div className="splash-auth-links">
                        <NavLink to="/sign-in">Sign-in</NavLink>
                        <NavLink to="/sign-up">Sign-up</NavLink>
                    </div>

                    <div id="right-gif">
                        <img id="logo-img" src={tackle}></img>
                    </div>

                    <div id="bottom-gifs">
                        <img id="logo-img" src={legs}></img>
                        <img id="logo-img" src={save}></img>
                        <img id="logo-img" src={dinho}></img>
                        <img id="logo-img" src={yedlin}></img>
                    </div>
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