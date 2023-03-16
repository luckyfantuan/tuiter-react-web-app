import React from "react";
import ProfileItem from "./profile"
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const myProfile = useSelector(state => state.profile);
    return (
        <>
            <ProfileItem profile={myProfile}/>
        </>
    );
};
export default ProfileComponent;