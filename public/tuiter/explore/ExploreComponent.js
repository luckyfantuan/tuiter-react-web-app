import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
           <!-- search field and cog -->
           <div class="d-flex align-content-center">
                <div class="flex-grow-1">
                    <input class="wd-search-bar" type="search" placeholder="Search Twitter"/>
                </div>
                <div class="flex-shrink-1">
                    <a href="explore-settings.html"><i class="fa-solid fa-gear fa-2x"></i></a>
                </div>
           </div>
        </div>
        <div class="card text-center border-0">
            <div class="card-header ps-2">
                <ul class="nav mb-2 nav-tabs">
                    <!-- tabs -->
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div class="row border-secondary">
                    <img class="p-0 custom-border" src="spacex.png"/>
                </div>
               <!-- image with overlaid text -->
               ${PostSummaryList()}
           </div>
       </div>
    `);
}
export default ExploreComponent;

function testExploreComponent() {
    $('#wd-exploreComponent').append(
        `
        ${ExploreComponent()}
    </ul>
    `
    );
}

$(testExploreComponent);
