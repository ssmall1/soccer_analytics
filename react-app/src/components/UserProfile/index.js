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

  const user = useSelector(state => state.session.user);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [imgUrl, setImgUrl] = useState(user.img_url);
  const [bio, setBio] = useState(user.bio);
  const [editForm, setEditForm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
 
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
    await dispatch(matchesReducer.getMatch(match_key));
    history.push(`/matches/${match_key}`)
  }

  // function handleSendHome(){
  //   history.push('/');
  // }

  async function handleEditProfile(e){
    e.preventDefault();
    if (firstName === user.first_name && lastName === user.last_name && imgUrl === user.img_url && bio === user.bio) {
      setEditForm(false);
      return null;
    }
    let id = user.id;

    const profile = {
        id,
        firstName,
        lastName,
        imgUrl,
        bio
    }
    await dispatch(sessionReducer.updateUser(profile));
    setEditForm(false);
}

  async function handleDeleteUser(){
    setConfirmDelete(false);
    await dispatch(sessionReducer.deleteUser(user.id));
    history.push('/welcome');
  }

  return (
    <div className="profile-wrapper">
      {editForm ?
        <div className="edit-profile-form-container">
          <form id="edit-profile-form">
            <label>First Name</label>
            <input
                className="profile-input"
                type="textbox"
                name="first"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                required
            >
            </input>
            <label>Last Name</label>
            <input
                className="profile-input"
                type="textbox"
                name="last"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                required
            >
            </input>
            <label>Profile Image</label>
            <input
                className="profile-input"
                type="textbox"
                name="img"
                onChange={e => setImgUrl(e.target.value)}
                value={imgUrl}
                required
            >
            </input>
            <label>Profile Bio</label>
            <input
                className="profile-input"
                type="textbox"
                name="bio"
                onChange={e => setBio(e.target.value)}
                value={bio}
                required
            >
            </input>
            <div className="edit-comment-container">
                <button id="cancel-edit-profile" onClick={() => setEditForm(false)}>Cancel</button>
                <button id="edit-profile" disabled={firstName === "" || lastName === "" || imgUrl === "" || bio === ""} onClick={(e) => handleEditProfile(e)}>Save</button>
            </div>
          </form>
        </div>
        :
        <div className="profile-container">
          <img id="profile-img" src={user.img_url} alt={`${user.first_name} ${user.last_name} profile`}></img>
          <div id="profile-name">{user.first_name} {user.last_name}</div>
          <div id="profile-bio">{user.bio}</div>
          <div id="user-buttons-container">
            <button 
              id="open-edit-profile"
              onClick={() => {
                setEditForm(true)
                return setConfirmDelete(false)
              }
            }
            >
              Edit Profile
            </button>
            <button id="delete-profile" onClick={() => setConfirmDelete(true)}>Delete Account</button>
          </div>
          { confirmDelete ? 
            <div id="confirm-delete-container">
              <div>Are You Sure?</div>
              <div className="user-buttons-container">
                <button id="delete-profile" onClick={() => handleDeleteUser()}>Yes I'm Sure</button>
                <button id="cancel-delete-profile" onClick={() => setConfirmDelete(false)}>Just Kidding</button>
              </div>
            </div>
            :
            <></>
          }
        </div>
      }

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
