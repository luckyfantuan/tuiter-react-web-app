const NavigationSidebar = () => {
    return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fa-brands fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-house"></i>
        <span class="d-inline list-text d-none d-xl-inline-block d-l-none">
            Home</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa-solid fa-hashtag"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">Explore</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bell"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">Notification</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-envelope"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">Messages</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bookmark"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">Bookmarks</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-list"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">Lists</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-user"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">Profile</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-ellipsis"></i> <span
                class="d-inline d-none d-xl-inline-block d-l-none list-text">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

function testNavigationComponent() {
    $('#wd-navigation').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
  </div>
   `);
}

$(testNavigationComponent);