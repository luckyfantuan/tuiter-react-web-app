import WhoToFollowList from "../WhoToFollowList/index.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
    ${NavigationSidebar('explore')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
<!--    <h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
   </div>
   <div class="col-4 right-col d-none d-lg-block">
        <ul class="list-group">
            <li class="list-group-item"><b>Who to follow</b></li>
  
            ${WhoToFollowList()}
        </ul>
    </div>
    </div>
    `
    );
}

$(exploreComponent);