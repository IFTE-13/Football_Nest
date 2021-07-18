import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './LeagueData.css'
import { useHistory} from 'react-router';

const LeagueData = (props) => {
    const {strTeam, strLeague2, strTeamBadge, idTeam} = props.leagueData;
    const history = useHistory();
    const showDetails= abc => {
        const url =`/teamDetails/${idTeam}`;
        history.push(url);
    }
    return (
            <div className="col-md-3 col-sm-6 m-3">
                <div className="card p-3 cardStyle">
                        <div className="d-flex justify-content-center">
                        <img src={strTeamBadge} className="card-img-top img" alt="" />
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text text-center"><strong>{strTeam}</strong></p>
                            <p className="text-center">{strLeague2}</p>
                            <button onClick={() => showDetails()} className="d-grid gap-2 col-6 mx-auto btn btn-dark effect"><small><FontAwesomeIcon icon={faArrowRight} /> Explore</small></button>
                        </div>
                    
                
            </div>
        </div>
       
    );
};

export default LeagueData;