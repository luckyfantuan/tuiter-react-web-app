import React from "react";

const NavigationSidebar = ({
                               active = 'explore'
                           }) => {
    return (
        <div className="list-group wd-navigation">
            <a className="list-group-item list-group-item-action">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
                Home
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'explore' ? 'active' : ''}`}>
                Explore
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'notifications' ? 'active' : ''}`}>
                Notifications
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'messages' ? 'active' : ''}`}>
                Messages
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'lists' ? 'active' : ''}`}>
                Lists
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'profile' ? 'active' : ''}`}>
                Profile
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'more' ? 'active' : ''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;