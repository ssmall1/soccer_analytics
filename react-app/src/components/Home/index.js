import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as matchesReducer from "../../store/matches";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const matches = useSelector(state => state.matches.matches)
    console.log(matches)
    
    useEffect(() => {
        dispatch(matchesReducer.getMatches())
    }, [])

    if (!matches) return null;

    return(
        <div className="home-wrapper">
            <h1>SA Home Page</h1>
            <div className="matches-wrapper">
                {matches.map((match) => {
                    return(
                        <Link to={`/matches/${match.match_key}`}>
                            <div className="match-container" key={match.match_key}>
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