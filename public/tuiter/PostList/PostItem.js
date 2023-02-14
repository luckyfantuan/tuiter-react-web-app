const PostItem = (post) => {
    return (`
    <div class="row wd-border-bottom mt-2">
        <div class="col-1">
            <img class="wd-avatar align-middle" src="${post.avatar}">
        </div>
        <div class="col-11">
            <div class="row justify-content-start">
                    <div class="col me-auto">
                        <span class="wd-username" style="color:white;">${post.userName}</span>
                        <i class="fa-solid fa-square-check wd-mark"></i>
                        <span>${post.handle} &#x2022; ${post.time}</span>
                     </div>
                    <div class="col-auto">&#x2022; &#x2022; &#x2022;</div>
            </div>
            <div class="row" style="color:white;">
                <p>${post.summary}</p>
            </div>
            <div class="row wd-post-section">
                <img class="wd-image mt-2" src="${post.image}">
                <p class="wd-post-title mt-2">${post.title}</p>
                <p>${post.text}</p>
            </div>
            <div class="row justify-content-evenly mt-2">
                <div class="col"><i class="fa-regular fa-comment"></i>
                    <span>${post.comments}</span></div>
                <div class="col"><i class="fa-solid fa-retweet"></i>
                    <span>${post.retweets}</span></div>
                <div class="col"><i class="fa-regular fa-heart"></i>
                    <span>${post.likes}</span></div>
                <div class="col"><i class="fa-solid fa-download"></i></div>
            </div>
        </div>   
    </div>
    `);

}
export default PostItem;

function testPostSummaryItem() {
    $('#wd-postItem').append(
        `
        ${PostItem(
            {
                avatar: '../../images/elonmusk-avatar.png',
                userName: 'Elon Musk',
                handle: '@elonmusk',
                time: '23h',
                summary: 'Consumers are suing Sazerac Company, Inc., the makers of Fireball whiskey,\n                    for\n                    fraud and\n                    misrepresentation, as the mini bottles of the alcoholic beverage don\'t actually contain whiskey.',
                title: 'There\'s no whiskey in mini bottles of Fireball, so customers are suing for\n                        fraud',
                text: 'Consumers are suing Sazerac Company, Inc., the makers of Fireball whiskey,\n                        for\n                        fraud and misrepresentation, as the mini bottles of the alcoholic beverage don\'t actually\n                        contain\n                        whiskey.\n\n                        The smaller bottles, named Fireball Cinnamon, are made from a blend of malt beverage and wine,\n                        while\n                        the whiskey-based products are called Fireball Cinnamon Whisky, according to the company\n                        website.',
                image: '../../images/inspiration4.png',
                comments: '4.7K',
                retweets: '3.5K',
                likes: '37.5K',
            },
        )}
    `
    );
}

$(testPostSummaryItem);