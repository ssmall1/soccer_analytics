import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as eventsReducer from "../../store/events";
import * as matchesReducer from "../../store/matches";
import * as favoriteReducer from "../../store/favorite";
import EventChart from "../EventChart";
import Comments from "../Comments";
import "./Match.css";

const Match = () => {
    const dispatch = useDispatch();
    const matchKeyStr = useParams();
    const matchKey = parseInt(matchKeyStr.matchKey, 10);

    const events = useSelector(state => state.events.events);
    const match = useSelector(state => state.matches.match);
    const user = useSelector(state => state.session.user);
    const favorites = useSelector(state => state.favorites.favorites);

    useEffect(() => {
        dispatch(eventsReducer.getMatchEvents(matchKey));
        dispatch(matchesReducer.getMatch(matchKey));
        dispatch(favoriteReducer.getFavorites(user.id));
        dispatch(eventsReducer.getEvents());
    }, [])

    if (!events) return null;
    
    if (!match) return null;
    
    if (!favorites) return null;

    let currentFavorite1 = favorites.filter((favorite) => {
        if (favorite?.match_id === match.id) {
            return favorite;
        }
        return null;
    })

    let currentFavorite = currentFavorite1[0];
    console.log(currentFavorite, "currentFavorite")

    async function handleFavorite(e) {
        e.preventDefault();
        const userId = user.id;
        const matchId = match.id;
        const payload = {
            userId,
            matchId
        }
        await dispatch(favoriteReducer.postFavorite(payload));
    }

    async function handleRemoveFavorite(e) {
        e.preventDefault();
        await dispatch(favoriteReducer.deleteFavorite(currentFavorite));
        await dispatch(favoriteReducer.getFavorites(user.id))
    }

    return(
        <div className="match-wrapper">
            <div className="match-info">
                { currentFavorite ? 
                    <button id="match-unfavorite-btn" onClick={handleRemoveFavorite}>Favorited</button> 
                    : <button id="match-favorite-btn" onClick={handleFavorite}>Favorite</button> 
                }
                <div id="match-page-title">{match.match_name}</div>
                <img id="match-page-img" src={match.match_img} alt={`${match.match_name}`}/>
            </div>
            <div className="match-analysis-wrapper">
                <div className="analysis-selector-container">

                </div>
                <div className="pitch-chart-container">
                    <EventChart id="pitch-chart"/>
                </div>
            </div>

            <Comments />
        </div>
    )
}

export default Match