import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>

            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter