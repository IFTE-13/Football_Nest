import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import LeagueData from '../LeagueData/LeagueData';
import './Home.css';
const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeague(data.teams);
                console.log(data.teams);
            })
    }, [])
    return (
        <div>
            <Header></Header>
        <div className="bg">
            <div className="container">
            <div className="row d-flex justify-content-center">
                {
                    league.map(leagueData=> <LeagueData key={leagueData.idTeam} leagueData={leagueData}></LeagueData>)
                }
            </div>
            </div>
        </div>
        </div>
    );
};

export default Home;