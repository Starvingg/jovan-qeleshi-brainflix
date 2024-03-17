
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import DisplayComments from "../../components/Comments/DisplayComment/DisplayComment";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import { useState } from "react";
import videoData from "../../data/video-details.json"


function HomePage() {

    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    return (
        <>
            <VideoPlayer video={selectedVideo} />
            <div className='pageHandler'>
                <div className='pageHandler-videoInfoComments'>
                    <VideoInfo video={selectedVideo} />
                    <h4>{selectedVideo.comments.length} Comments</h4>
                    <DisplayComments commentsData={selectedVideo} />
                </div>
                <div className='pageHandler-nextVideo'>
                    <RecommendedVideos nextVideo={videoData} onVideoSelect={setSelectedVideo} selectedVideo={selectedVideo} />
                </div>
            </div>
        </>
    )

}

export default HomePage;