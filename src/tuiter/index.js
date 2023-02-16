import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            {/*<PostSummaryList/>*/}
            <ExploreComponent/>
            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter