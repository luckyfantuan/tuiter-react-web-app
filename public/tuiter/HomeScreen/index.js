import WhoToFollowList from "../WhoToFollowList/index.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

function exploreComponent() {
    $('#wd-explore').append(`
       <h2>Explore</h2>
       <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
    ${NavigationSidebar('home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
<!--    <h3>ExploreComponent</h3>-->
    ${PostList()}
   </div>
   <div class="col-4 right-col d-none d-lg-block">
        ${PostSummaryList()}
    </div>
    </div>
    `
    );
}

$(exploreComponent);