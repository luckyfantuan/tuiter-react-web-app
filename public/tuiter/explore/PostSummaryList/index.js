import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const index = () => {
    return (`
      <ul class="list-group">
         ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
      </ul>
   `);
}
export default index;

function testPostSummaryListComponent() {
    $('#wd-postSummaryList').append(
        `
        ${index()}
    </ul>
    `
    );
}

$(testPostSummaryListComponent);