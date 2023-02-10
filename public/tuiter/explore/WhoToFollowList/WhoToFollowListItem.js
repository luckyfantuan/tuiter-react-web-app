const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item d-flex align-content-center">
        <img class="wd-avatar margin-r-12" src="../../images/${who.avatarIcon}">
    <div class="flex-grow-1">
    <p class="wd-header">
    <b class="wd-title">${who.userName}</b>
    <i class="fa-solid fa-square-check"></i>
    </p>
    <p class="wd-author">@${who.handle}</p>
    </div>
    <button class="btn btn-primary rounded-pill follow-button">Follow</button>
    </li>
    `
    );
}
export default WhoToFollowListItem;

function testWhoToFollowListComponent() {
    $('#wd-whoToFollowItem').append(
        `
    <ul class="list-group">
    <li class="list-group-item"><b>Who to follow</b></li>
        ${WhoToFollowListItem({
            avatarIcon: 'java.png',
            userName: 'Java', handle: 'Java',
        })}
    </ul>
    `
    );
}

$(testWhoToFollowListComponent);