import React from "react";
import './index.css';

const PostItem = (
    {
        post = {
            "_id": "123",
            "avatar": "elonmusk-avatar.png",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "summary": "Consumers are suing Sazerac Company, Inc., the makers of Fireball whiskey,\n                    for\n                    fraud and\n                    misrepresentation, as the mini bottles of the alcoholic beverage don't actually contain whiskey.",
            "title": "There's no whiskey in mini bottles of Fireball, so customers are suing for\n                        fraud",
            "text": "Consumers are suing Sazerac Company, Inc., the makers of Fireball whiskey,\n                        for\n                        fraud and misrepresentation, as the mini bottles of the alcoholic beverage don't actually\n                        contain\n                        whiskey.\n\n                        The smaller bottles, named Fireball Cinnamon, are made from a blend of malt beverage and wine,\n                        while\n                        the whiskey-based products are called Fireball Cinnamon Whisky, according to the company\n                        website.",
            "image": "inspiration4.png",
            "comments": "4.7K",
            "retweets": "3.5K",
            "likes": "37.5K",
            "retweetedBy": "Elon Musk",
            "showThread": true,
            "quote": ""
        }
    }
) => {
    const showThread = post.showThread;
    const isRetweeted = post.retweetedBy !== "";
    const showImage = post.image !== "";
    const showQuote = post.quote !== "";
    return (
        <div className="wd-border-bottom mt-2 mb-2">
            {isRetweeted && <div className="row">
                <div className="col-1">
                    <div className="row">
                        <i className="bi bi-app-indicator wd-retweeted"></i>
                    </div>
                </div>
                <div className="col-11">
                    <span>{post.retweetedBy} Retweeted</span>
                </div>
            </div>}
            <div className="row">
                <div className="col-1">
                    <img className="wd-avatar align-middle" src={`/images/${post.avatar}`} alt="avatar"/>
                </div>
                <div className="col-11">
                    <div className="row justify-content-start">
                        <div className="col me-auto">
                            <span className="wd-username">{post.userName} </span>
                            <i className="bi bi-check-lg wd-mark"></i> <span>{post.handle} &#x2022; {post.time}</span>
                        </div>
                        <div className="col-auto">&#x2022; &#x2022; &#x2022;</div>
                    </div>
                    <div className="row">
                        <p>{post.summary}</p>
                    </div>
                    <div className="row">
                        {showImage && <img className="wd-image" src={`/images/${post.image}`} alt="image"/>}
                    </div>
                    {showQuote && <div className="row border wd-quote">
                        <div className="row justify-content-start">
                            <div className="col me-auto">
                                <img className="wd-quote-avatar align-middle" src={`/images/${post.quote.avatar}`}
                                     alt="quote avatar"/>
                                <span className="wd-username"> {post.quote.userName} </span>
                                <i className="bi bi-check-lg wd-mark"></i>
                                <span> {post.quote.handle} &#x2022; {post.quote.time}</span>
                            </div>
                        </div>
                        <div className="row">
                            <p>{post.quote.summary}</p>
                        </div>
                    </div>}
                    <div className="row justify-content-evenly mt-2">
                        <div className="col">
                            <i className="bi bi-chat"> <span>{post.comments}</span></i>
                        </div>
                        <div className="col">
                            <i className="bi bi-app-indicator"> <span>{post.retweets}</span></i>
                        </div>
                        <div className="col">
                            <i className="bi bi-heart"> <span>{post.likes}</span></i>
                        </div>
                        <div className="col">
                            <i className="bi bi-download"></i>
                        </div>
                    </div>
                    {showThread && <div className="row">
                        <a className="wd-thread" href="#">Show this thread</a>
                    </div>}
                </div>
            </div>
        </div>
    );
};
export default PostItem;