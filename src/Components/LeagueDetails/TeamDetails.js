import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import picture1 from '../../Photo/male.png';
import picture2 from '../../Photo/female.png';
import logo1 from '../../Icon/Facebook.png';
import logo2 from '../../Icon/Twitter.png';
import logo3 from '../../Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    const [details, setDetails] = useState({});
    const { idTeam } = useParams();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data.teams[0]);
                console.log(data.teams)
            })
    }, [idTeam])
    return (
        <div>
            <div style={{
                background: `url(${window.innerWidth<700? details.strTeamFanart1 || details.strTeamBanner || "https://wallpaperaccess.com/full/1884509.jpg":details.strTeamBanner 
                ||"https://wallpaperaccess.com/full/1884509.jpg"}) no-repeat center right/cover`,
                width: "100%",
                height: "50vh",
                color: "white"
            }} className="detPic">

                <div className="backgroundPrac">
                    <img src={details.strTeamBadge} alt="" />
                </div>
            </div>
            <div className="bg-dark d-flex justify-content-center">
                <div className="container mt-5">
                    <div className="d-flex justify-content-around">
                        <div className="info text-light row container">
                            <div className="mt-3 col-md-6 px-5">
                                <h3>{details.strTeam}</h3>
                                <p><FontAwesomeIcon icon={faMapMarked} />  Founded: {details.intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag} /> Country : {details.strCountry}</p>
                                <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: {details.strSport}</p>
                                <p><FontAwesomeIcon icon={faMars} /> Gender: {details.strGender}</p></div>
                            <div className="col-md-6 my-2 picStyle d-flex justify-content-center align-items-center"><img src={details.strGender === "Male" ? picture1 : picture2} alt="" /></div>
                        </div>
                    </div>
                    <div className="text-light mt-2 descDet">
                        <div align="right">
                        <button className="gap-2 col- mx-auto btn none w-25"><Link style={{ textDecoration: "none" }} to="/"> Home </Link></button>
                        </div>
                    
                        <p align="justify">{details.strDescriptionEN}</p>
                        <p align="justify">{details.strStadiumDescription}</p>
                        <div className="logo mb-3 d-flex justify-content-center">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com"><img src={logo1} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com"><img src={logo2} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://youtube.com"><img src={logo3} alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamDetails;