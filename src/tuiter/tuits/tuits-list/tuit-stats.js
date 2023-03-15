import React from "react";
import {updateLiked} from "../tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStats = (
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
    const dispatch = useDispatch();
    const isLiked = tuit.liked;
    const toggleLiked = (tuit) => {
        dispatch(updateLiked(tuit))
    }
    return (
        <div className="row justify-content-evenly mt-2">
            <div className="col">
                <i className="bi bi-chat"> <span>{tuit.replies}</span></i>
            </div>
            <div className="col">
                <i className="bi bi-app-indicator"> <span>{tuit.retuits}</span></i>
            </div>
            <div className="col">
                {isLiked ?
                    <i className="bi bi-heart-fill" onClick={() => toggleLiked(tuit)}> <span>{tuit.likes}</span></i> :
                    <i className="bi bi-heart" onClick={() => toggleLiked(tuit)}> <span>{tuit.likes}</span></i>}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;