import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as matchesReducer from "../../store/matches";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const matches = useSelector(state => state.matches.matches)
    
    useEffect(() => {
        dispatch(matchesReducer.getMatches())
    }, [dispatch])

    if (!matches) return null;

    async function handleSetMatch(match_key){
        await dispatch(matchesReducer.getMatch(match_key));
        history.push(`/matches/${match_key}`)
    }

    return(
        <div className="home-wrapper">
            <div className="matches-wrapper">
                {matches.map((match) => {
                    return(
                        // <Link to={`/matches/${match.match_key}`}>
                        <div className="match-container" key={match.match_key} onClick={() => handleSetMatch(match.match_key)}>
                            <img id="match-img" src={match.match_img} alt={`${match.match_name}`}/>
                            <div>{match.match_name}</div>
                        </div>
                        /* </Link> */
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home;