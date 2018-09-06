import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    // ES6 syntax for
    // const url = 'https://www.youtube.com/embed/' + 'videoId';
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <div>
                <div>
                    <iframe src={url} title={video.snippet.title} />
                </div>
            </div>
            <div>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
