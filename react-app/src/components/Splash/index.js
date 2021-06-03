import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
// import { login } from "../../store/session";
// import pitchImg from "../../resources/pitch.jpg";
import './Splash.css';

const Splash = () => {

    return(
        <>
            <div>
                What it dooooo
            </div>

            <div className="splash-auth-links">
                <NavLink to="/sign-in">Sign-in</NavLink>
                <NavLink to="/sign-up">Sign-up</NavLink>
            </div>
        </>
    )
}

export default Splash;