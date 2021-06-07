import React from "react";
// import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
import './UserProfile.css';

function UserProfile() {
  const user = useSelector(state => state.session.user);
  // const [user, setUser] = useState({});
  // // Notice we use useParams here instead of getting the params
  // // From props.
  // const { userId }  = useParams();

  // useEffect(() => {
  //   if (!userId) {
  //     return
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img id="profile-img" src={user.img_url} alt={`${user.first_name} ${user.last_name} profile`}></img>
        <div id="profile-name">{user.first_name} {user.last_name}</div>
      </div>

      <div className="favorites-container">
        Favorites Go Here.
      </div>
    </div>
  );
}
export default UserProfile;
