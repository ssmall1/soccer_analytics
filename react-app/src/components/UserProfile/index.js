import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './UserProfile.css';
import * as matchesReducer from "../../store/matches";
import * as favoriteReducer from "../../store/favorite";

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const favorites = useSelector(state => state.favorites.favorites)
  const matches = useSelector(state => state.matches.matches)

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

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img id="profile-img" src={user.img_url} alt={`${user.first_name} ${user.last_name} profile`}></img>
        <div id="profile-name">{user.first_name} {user.last_name}</div>
      </div>

      <div className="favorites-container">
        <div className="favorites-title-container">
          <div id="favorites-title">Favorite Matches</div>
        </div>
        <div className="favorite-matches-container">
          {userMatches.map((match) => {
              return(
                  <Link to={`/matches/${match.match_key}`} key={match.match_key}>
                      <div className="profile-match-container">
                          <img id="profile-match-img" src={match.match_img} alt={`${match.match_name}`}/>
                          <div>{match.match_name}</div>
                      </div>
                  </Link>
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
