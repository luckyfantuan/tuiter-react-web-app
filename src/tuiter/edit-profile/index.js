import React, {useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {updateProfile} from "../reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";

const EditProfileComponent = () => {
    const myProfile = useSelector((state) => state.profile)
    const [profile, setProfile] = useState(myProfile
    );

    const dispatch = useDispatch();
    const dob = profile.dateOfBirth

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setProfile(values => ({...values, [name]: value}))
        console.log("new profile is: ", profile);
    }

    const editProfile = () => {
        dispatch(updateProfile(profile));
    }
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
                    <button className="btn btn-secondary" onClick={editProfile}>Save</button>
                </div>


            </div>
            <div className="position-relative wd-parent-height">
                <div className="position-absolute top-10">
                    <img className="wd-banner-image" src={`/images/${profile.bannerPicture}`} alt=" banner"/>
                </div>

                <div className="wd-zindex-bring-to-front wd-absolute-avatar-component">
                    <img className="wd-avatar-profile"
                         src={`/images/${profile.profilePicture}`}
                         alt=" profile"/>
                </div>
            </div>

            <div className="form-control">
                <label className="form-control-label" htmlFor="firstName">First Name</label>
                <input className="form-control border-0 ps-0" type="textarea" id="firstName"
                       onChange={handleChange}
                       placeholder={profile.firstName}/>
            </div>
            <div className="form-control mt-4">
                <label htmlFor="lastName">Last Name</label>
                <div><input className="form-control border-0 ps-0" type="textarea" id="lastName" onChange={handleChange}
                            placeholder={profile.lastName}/></div>
            </div>
            <div className="form-control mt-4">
                <label htmlFor="bio">Bio</label>
                <div><input type="textarea" id="bio" className="wd-bio-input form-control border-0 ps-0"
                            placeholder={profile.bio}
                            onChange={handleChange}/>
                </div>
            </div>
            <div className="form-control mt-4">
                <label htmlFor="location">Location</label>
                <div><input type="textarea" id="location" className="wd-bio-input form-control border-0 ps-0"
                            placeholder={profile.location} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-control mt-4">
                <label htmlFor="website">Website</label>
                <div><input type="textarea" id="website" className="wd-bio-input form-control border-0 ps-0"
                            placeholder={profile.website} onChange={handleChange}/>
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="dateOfBirth ">Birth date &#x2022; Edit</label>
                <div><input type="date" id="dateOfBirth" className="wd-bio-input"
                            defaultValue={dob} onChange={handleChange}/>
                </div>
            </div>
        </div>
    );
};

export default EditProfileComponent;