import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as eventsReducer from "../../store/events";
import * as matchesReducer from "../../store/matches";
import EventChart from "../EventChart";
import "./Match.css";

const Match = () => {
    const matchKeyStr = useParams();
    const matchKey = parseInt(matchKeyStr.matchKey, 10)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events)
    const match = useSelector(state => state.matches.match)
    console.log(match)
    
    useEffect(() => {
        dispatch(eventsReducer.getMatchEvents(matchKey))
        dispatch(matchesReducer.getMatch(matchKey))
    }, [])

    useEffect(() => {
        dispatch(eventsReducer.getEvents())
    }, [])

    if (!events) return null;

    if(!match) return null;

    return(
        <div className="match-wrapper">
            <div className="match-info">
                <img id="match-page-img" src={match.match_img}/>
                <div id="match-page-title">{match.match_name}</div>
            </div>
            <div className="match-chart-wrapper">
                <div className="pitch-chart-wrapper">
                    <EventChart id="pitch-chart"/>
                </div>
            </div>
        </div>
    )
}

export default Match