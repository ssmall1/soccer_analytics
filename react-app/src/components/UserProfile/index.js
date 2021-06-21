import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './UserProfile.css';
import * as matchesReducer from "../../store/matches";
import * as favoriteReducer from "../../store/favorite";

function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const favorites = useSelector(state => state.favorites.favorites);
  const matches = useSelector(state => state.matches.matches);

  console.log(favorites, "favorites")

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

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img id="profile-img" src={user.img_url} alt={`${user.first_name} ${user.last_name} profile`}></img>
        <div id="profile-name">{user.first_name} {user.last_name}</div>
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
