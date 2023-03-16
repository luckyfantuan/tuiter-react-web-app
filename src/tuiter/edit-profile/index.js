import React from "react";
import "./index.css";

const EditProfileComponent = (
    {
        profile = {
            "firstName": "Lili",
            "lastName": "Qing",
            "handle": "@liliqing",
            "bio": "MSCS Align Student @NEU",
            "profilePicture": "liliqing.png",
            "bannerPicture": "lilibanner.jpeg",
            "website": 'youtube.com/webdevtv',
            "location": 'Seattle, WA',
            "dateOfBirth": "9/18/2000",
            "dateJoined": '10/2020',
            "followingCount": 340,
            "followersCount": 223,
            "tuitsCount": 6114
        }
    }
) => {
    return (
        <div className="wd-border-bottom mt-2 mb-2">
            <div className="row">
                <div className="col-auto">
                    <button type="button" className="btn"><i
                        className="bi bi-x-lg align-middle"></i></button>
                </div>
                <div className="col-auto mt-2 wd-edit-profile">Edit Profile</div>
                <div className="col float-end">
                    <button type="button" className="btn btn-secondary">Save</button>
                </div>

            </div>
            <div className="position-relative wd-parent-height">
                <div className="position-absolute top-10">
                    <img className="wd-banner-image" src={`/images/${profile.bannerPicture}`} alt=" banner image"/>
                </div>

                <div className="wd-zindex-bring-to-front wd-absolute-avatar-component">
                    <img className="wd-avatar-profile"
                         src={`/images/${profile.profilePicture}`}
                         alt=" profile image"/>
                </div>
            </div>
            <div>
                <div className=" wd-profile-name ms-lg-5">{profile.firstName} {profile.lastName} </div>
                <div className=" ms-lg-5">{profile.handle}</div>
            </div>
            <div className=" ms-lg-5 mt-2">{profile.bio}</div>
            <div className=" row mt-2 d-flex justify-content-start">
                <div className="col-auto"><i className=" bi bi-geo-alt ms-lg-5">{profile.location}</i></div>
                <div className="col-auto"><i className=" bi bi-balloon ms-1 float-left">{profile.dateOfBirth}</i>
                </div>
                <div className="col-auto"><i
                    className=" bi bi-calendar3 float-left">Joined {profile.dateJoined}</i>
                </div>
            </div>
            <div className=" row mt-2 d-flex">
                <div className="col-auto"><i
                    className=" bi bi-geo-alt ms-lg-5 col wd-bold">{profile.followingCount}</i> Following
                </div>
                <div className="col-auto"><i
                    className=" bi bi-balloon col-4 ms-1 wd-bold justify-content-start">{profile.followersCount} </i>Followers
                </div>
            </div>

        </div>
    );
};

export default EditProfileComponent;