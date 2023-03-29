import React from "react";

const PostSummaryItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    console.log("tuit is:", tuit);
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{tuit.username} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt="detail"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;