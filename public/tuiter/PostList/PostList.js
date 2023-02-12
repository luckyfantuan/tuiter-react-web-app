import PostItem from "./PostItem.js";
import posts from "./posts.js";

const postList = () => {
    return (`
         ${
        posts.map(post => {
            return (PostItem(post));
        }).join('')
    }
   `);
}
export default postList;

function testPostListComponent() {
    $('#wd-postList').append(
        `
        ${postList()}
    </ul>
    `
    );
}

$(testPostListComponent);