import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const index = () => {
    return (`
         ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
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