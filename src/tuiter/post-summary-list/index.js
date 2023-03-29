import React, {useEffect} from "react";
import PostSummaryItem
    from "./post-summary-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    console.log("In post-summary-list postsArray is:", tuits);
    console.log(loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <PostSummaryItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default PostSummaryList;