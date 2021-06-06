import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as matchesReducer from "../../store/matches";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const matches = useSelector(state => state.matches.matches)
    
    useEffect(() => {
        dispatch(matchesReducer.getMatches())
    }, [])

    if (!matches) return null;

    return(
        <div className="home-wrapper">
            <div className="matches-wrapper">
                {matches.map((match) => {
                    return(
                        <Link to={`/matches/${match.match_key}`} key={match.match_key}>
                            <div className="match-container">
                                {match.match_name}
                            </div>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home;