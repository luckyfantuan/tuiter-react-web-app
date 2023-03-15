import React from "react";
import StatsComponent from "./tuit-stats";
import './index.css';

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 345,
            "retuits": 321,
            "likes": 1234,
            "handle": "@SpaceX",
            "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-avatar-tuit align-middle img-fluid" src={`/images/${tuit.image}`} alt="avatar"/>
                </div>
                <div className="col-10">
                    <div className="row justify-content-start">
                        <div className="col me-auto">
                            <span className="wd-username">{tuit.userName} </span>
                            <i className="bi bi-check-lg wd-mark"></i> <span>{tuit.handle} &#x2022; {tuit.time}</span>
                        </div>
                    </div>
                    <div className="row">
                        <p>{tuit.tuit}</p>
                    </div>
                    <StatsComponent key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;