import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        updateLiked(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            if (tuit.liked) {
                tuit.likes += 1
            } else {
                tuit.likes -= 1
            }
        }
    }
});

export const {updateLiked} = tuitsSlice.actions;
export default tuitsSlice.reducer;