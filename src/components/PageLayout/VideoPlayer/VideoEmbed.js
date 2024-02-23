import React from 'react';
import YouTube from 'react-youtube';

const VideoEmbed = ( {videoId} ) => {
    // Options for the YouTube player
    const opts = {
        height: '390',
        width: '640',
        loading: 'lazy',
        controls: 'hidden',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <YouTube videoId={videoId} opts={opts} />
    );
}

export default VideoEmbed;