import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {findTuitsThunk}
    from "../../../services/tuits-thunks";
import TuitItem
    from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitsList;