import React from "react";
import "./Footer.css";

const Footer = () => {

    return(
        <div className="footer-wrapper">
            <a href="https://github.com/ssmall1/soccer_analytics" rel="noopener noreferrer" target="_blank">
                Github  |
            </a>
            <a href="https://www.linkedin.com/in/schuler-small/" rel="noopener noreferrer" target="_blank">
                Connect  |
            </a>
            <i className="fa fa-copyright" aria-hidden="true"></i>
            Schuler Small | All Rights Reserved
        </div>
    )
}

export default Footer;