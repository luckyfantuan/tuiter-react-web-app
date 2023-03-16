import {createSlice} from "@reduxjs/toolkit";
import me from "../data/my-profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: me
});

export default profileSlice.reducer;