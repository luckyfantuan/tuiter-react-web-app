import React from "react";

const Profile = (
    {
        profile = {
            "firstName": "Lili",
            "lastName": "Qing",
            "handle": "@liliqing",
            "bio": "MSCS Align Student @NEU",
            "profilePicture": "tesla.png",
            "bannerPicture": "tesla.png",
            "website": 'youtube.com/webdevtv',
            "location": 'Seattle, WA',
            "dateOfBirth": "9/18/2000",
            "dateJoined": '10/2020',
            "followingCount": 340,
            "followersCount": 223
        }
    }
) => {
    return (
        <div>TEST</div>
    );
};

export default Profile;