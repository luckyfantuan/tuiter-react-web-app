import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group wd-navigation">
            <a className="list-group-item list-group-item-action">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-fill"></i> <span
                className="d-inline list-text d-none d-xl-inline-block d-l-none">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-tag-fill"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Labs</span>
            </Link>
            <a href="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'notifications' ? 'active' : ''}`}>
                <i className="bi bi-bell-fill"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Notification</span>
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'messages' ? 'active' : ''}`}>
                <i className="bi bi-envelope"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Messages</span>
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi bi-bookmark-fill"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Bookmarks</span>
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-ul"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Lists</span>
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'profile' ? 'active' : ''}`}>
                <i className="bi bi-person-fill"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">Profile</span>
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"></i> <span
                className="d-inline d-none d-xl-inline-block d-l-none list-text">More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;