import React from "react";

const VideoListItem = ({ video }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li>
            <div>
                <div>
                    <div>{title}</div>
                </div>
                <img src={imageUrl} alt="" />
            </div>
        </li>
    );
};

export default VideoListItem;
