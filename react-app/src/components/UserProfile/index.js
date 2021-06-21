import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './UserProfile.css';
import * as matchesReducer from "../../store/matches";
import * as favoriteReducer from "../../store/favorite";
import * as sessionReducer from "../../store/session";

function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [editForm, setEditForm] = useState(false);
  
 
  const user = useSelector(state => state.session.user);
  const favorites = useSelector(state => state.favorites.favorites);
  const matches = useSelector(state => state.matches.matches);

  useEffect(() => {
    dispatch(matchesReducer.getMatches())
    dispatch(favoriteReducer.getFavorites(user.id));
  }, [])

  if (!user) {
    return null;
  }

  if (!favorites) {
    return null
  }

  if (!matches) {
    return null
  }

  let userMatches = [];

  for (let i = 0; i < favorites.length; i++) {
    userMatches.push(matches.filter((match) => match.id === favorites[i].match_id)[0])
  }

  async function handleSetMatch(match_key){
    console.log(match_key)
    await dispatch(matchesReducer.getMatch(match_key));
    history.push(`/matches/${match_key}`)
  }

  // function handleSendHome(){
  //   history.push('/');
  // }

  async function handleEditProfile(e){
    e.preventDefault();
    if (firstName === "" || lastName === "" || imgUrl === "") {
        return null
    }
    let id = user.id;

    const profile = {
        id,
        firstName,
        lastName,
        imgUrl
    }
    await dispatch(sessionReducer.updateProfile(profile));
    setEditForm(false);
}

  return (
    <div className="profile-wrapper">
      <div className="edit-profile-form-container">
        <form id="edit-comment-form">
          <input
              className="profile-input"
              type="textbox"
              name="first"
              onChange={e => setFirstName(e.target.value)}
              value={user.first_name}
              placeholder={user.first_name}
              required
          >
          </input>
          <input
              className="profile-input"
              type="textbox"
              name="last"
              onChange={e => setLastName(e.target.value)}
              value={user.last_name}
              placeholder={user.last_name}
              required
          >
          </input>
          <input
              className="profile-input"
              type="textbox"
              name="img"
              onChange={e => setLastName(e.target.value)}
              value={user.imgUrl}
              placeholder={user.imgUrl}
              required
          >
          </input>
          <div className="edit-comment-container">
              <button id="cancel-edit-profile" onClick={() => setEditForm(false)}>Cancel</button>
              <button id="edit-profile" disabled={firstName === "" || lastName === "" || imgUrl === ""} onClick={(e) => handleEditProfile(e)}>Save</button>
          </div>
        </form>
      </div>
      <div className="profile-container">
        <img id="profile-img" src={user.img_url} alt={`${user.first_name} ${user.last_name} profile`}></img>
        <div id="profile-name">{user.first_name} {user.last_name}</div>
        <div id="profile-bio">{user.bio}</div>
        <button id="edit-profile-button" onClick={() => setEditForm(true)}>Edit Profile</button>
      </div>

      {/* { 
        favorites === [] ?
          <div onClick={() => handleSendHome()} id="send-home">
            <i class="fas fa-arrow-left"></i>
            Let's Add Some!
          </div> 
        : <></>
      }  */}
      <div className="favorites-container">
        <div className="favorites-title-container">
          <div id="favorites-title">Favorite Matches</div>
        </div>
        <div className="favorite-matches-container">
          {userMatches.map((match) => {
              return(
                      <div className="profile-match-container" key={match.match_key} onClick={() => handleSetMatch(match.match_key)}>
                          <img id="profile-match-img" src={match.match_img} alt={`${match.match_name}`}/>
                          <div>{match.match_name}</div>
                      </div>
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
