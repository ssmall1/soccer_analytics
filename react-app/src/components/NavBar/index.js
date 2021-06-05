import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';
import logo from "../../resources/logo.png";

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <div className="nav-wrapper">
        <div className="nav-home-container">
          <NavLink to="/" exact={true} activeClassName="active">
            <img id="nav-logo" src={logo} alt="nav-logo"></img>
          </NavLink>
        </div>
        <div className="nav-user-links">
          <div>
            <NavLink to={`/users/${user.id}`} exact={true} id="nav-profile" activeClassName="active">
              Profile
            </NavLink>
          </div>
          {/* <li>
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </li> */}
          <LogoutButton />
        </div>
    </div>
  );
}

export default NavBar;
