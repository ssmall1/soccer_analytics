import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as eventsReducer from "../../store/events";
import EventChart from "../EventChart";
import "./Match.css";

const Match = () => {
    const matchKeyStr = useParams();
    const matchKey = parseInt(matchKeyStr.matchKey, 10)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events)
    
    // useEffect(() => {
    //     dispatch(eventsReducer.getMatchEvents(matchKey))
    // }, [])

    useEffect(() => {
        dispatch(eventsReducer.getEvents())
    }, [])

    if (!events) return null;

    return(
        <div className="match-wrapper">
            <p>Hello</p>
            <EventChart />
        </div>
    )
}

export default Match