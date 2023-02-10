import WhoToFollowListItem from "./WhoToFollowListItem.js";
import users from "./who.js";

const index = () => {
    return (`
      <ul class="list-group">
         ${
        users.map(user => {
            return (WhoToFollowListItem(user));
        }).join('')
    }
      </ul>
   `);
}
export default index;

function testWhoToFollowListComponent() {
    $('#wd-whoToFollowList').append(
        `
        ${index()}
    </ul>
    `
    );
}

$(testWhoToFollowListComponent);