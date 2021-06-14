import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
import palmFooty from "../../resources/palmfooty.jpg";

const PageNotFound = () => {
  return(
    <>
      <div className="error-wrapper">
        <div className="error-text-container">
          <div className='error-header'>404 Error. Unfortunately, no matches here.</div>
          <div id='error-txt'>Sometimes the best places to play are hard to find. Keep searching.</div>
          <NavLink to="/" className='error-link'>Return Home</NavLink>
        </div>

        <div className='error-image-container'>
          <img alt='error' className='error-image' src={palmFooty}></img>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;