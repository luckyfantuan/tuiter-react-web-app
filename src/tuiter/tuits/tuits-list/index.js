import React from "react";
import TuitItem
    from "./tuit-item";
import {useSelector} from "react-redux";
import Tuiter from "../../index";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitsList;