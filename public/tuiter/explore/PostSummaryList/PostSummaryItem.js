const PostSummaryItem = (post) => {
    if (post.topic.length > 1
    ) {
        return (`
        <div class="row border-secondary mt-2">
            <div class="col-10">
                <p class="wd-header">
                    <p class="wd-author">${post.topic}</p>
                    <b class="wd-title">${post.userName}</b>
                    <i class="fa-solid fa-square-check icon-color"></i>
                    <span class="wd-time"> - ${post.time}</span>
                </p>
                <p class="wd-content"><b>${post.title}</b></p>
            </div>
            <div class="col-2 mt-2">
                <img class="wd-icon align-middle" src="../${post.image}">
            </div>
        </div>
    `
        );
    } else {
        return (`
        <div class="row border-secondary mt-2">
            <div class="col-10">
                <p class="wd-header">
                    <b class="wd-title">${post.userName}</b>
                    <i class="fa-solid fa-square-check icon-color"></i>
                    <span class="wd-time"> - ${post.time}</span>
                </p>
                <p class="wd-content"><b>${post.title}</b></p>
            </div>
            <div class="col-2 mt-2">
                <img class="wd-icon align-middle" src="../${post.image}">
            </div>
        </div>
    `
        );
    }
}
export default PostSummaryItem;

function testPostSummaryItem() {
    $('#wd-postSummaryItem').append(
        `
        ${PostSummaryItem(
            {
                topic: '',
                userName: 'JavaScript',
                time: '1 day',
                title: 'JavaScript is programming language that can run on browsers as well as desktops',
                image: '../../images/js.png',
                tweets: '123K',
            },
        )}
    `
    );
}

$(testPostSummaryItem);