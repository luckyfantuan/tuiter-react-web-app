import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

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
            "dateOfBirth": "09/18/2000",
            "dateJoined": '10/2020',
            "followingCount": 340,
            "followersCount": 223,
            "tuitsCount": 6114
        }
    }
) => {
    const name = profile.firstName + " " + profile.lastName
    const birthYear = profile.dateOfBirth.slice(-4);
    const birthMonth = profile.dateOfBirth.slice(0, 2);
    const birthDay = profile.dateOfBirth.slice(3, 5);
    const valueBOD = birthYear + "-" + birthMonth + "-" + birthDay;
    return (
        <div className="wd-border-bottom mt-2 mb-2">
            <div className="row">
                <div className="col-auto">
                    <Link to="/tuiter/profile"
                          className=" bi bi-x-lg align-middle ms-1 wd-back-button">
                    </Link>
                </div>
                <div className="col-auto" id="wd-edit-profile">Edit Profile</div>
                <div className="col">
                    <button className="btn btn-secondary">Save</button>
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
                <label for="name">Name</label>
                <div><input type="textarea" id="name" placeholder="Name" value={name}/></div>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <div><input type="textarea" id="bio" placeholder="Bio" className="wd-bio-input" value={profile.bio}/>
                </div>
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <div><input type="textarea" id="location" placeholder="Location" className="wd-bio-input"
                            value={profile.location}/>
                </div>
            </div>
            <div>
                <label htmlFor="website">Website</label>
                <div><input type="textarea" id="website" placeholder="Website" className="wd-bio-input"
                            value={profile.website}/>
                </div>
            </div>

            <div>
                <label htmlFor="birthdate">Birth date</label>
                <div><input type="date" id="birthdate" placeholder="Birth date" className="wd-bio-input"
                            value={valueBOD}/>
                </div>
            </div>


        </div>
    );
};

export default EditProfileComponent;