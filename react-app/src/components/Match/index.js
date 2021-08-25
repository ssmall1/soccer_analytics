import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as matchesReducer from "../../store/matches";
import * as favoriteReducer from "../../store/favorite";
import EventScatterChart from "../EventScatterChart";
import Comments from "../Comments";
import "./Match.css";

const Match = () => {
    const dispatch = useDispatch();
    const matchKeyStr = useParams();
    const matchKey = parseInt(matchKeyStr.matchKey, 10);

    const [eventType, setEventType] = useState("Shot");

    const match = useSelector(state => state.matches.match);
    const user = useSelector(state => state.session.user);
    const favorites = useSelector(state => state.favorites.favorites);

    useEffect(async () => {
        await dispatch(matchesReducer.getMatch(matchKey));
    }, [dispatch])

    useEffect(() => {
        dispatch(favoriteReducer.getFavorites(user.id));
    }, [match])

    if (!match) return null;
    
    if (!favorites) return null;

    let currentFavorite1 = favorites.filter((favorite) => {
        if (favorite?.match_id === match.id) {
            return favorite;
        }
        return null;
    })

    let currentFavorite = currentFavorite1[0];

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
        await dispatch(favoriteReducer.getFavorites(user.id));
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
            <div className="match-content-wrapper">
                <div className="pitch-chart-container">
                    <EventScatterChart id="pitch-chart" matchKey={matchKey} eventType={eventType}/>
                </div>
                <div className="chart-selector-wrapper">
                    <span>Filter By:</span>
                    <select onChange={(e) => setEventType(e.target.value)} className="event-type-selector">
                        <option value="Shot">Shots</option>
                        <option value="Pass">Passes</option>
                        <option value="Free Kick">Free Kicks</option>
                        <option value="Duel">Duels</option>
                        <option value="Foul">Fouls</option>
                        <option value="Save attempt">Saves</option>
                    </select>
                </div>
                <Comments id="comments-component"/>
            </div>
        </div>
    )
}

export default Match;