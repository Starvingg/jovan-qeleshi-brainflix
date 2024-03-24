
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import DisplayComments from "../../components/Comments/DisplayComment/DisplayComment";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const apiURL = 'http://localhost:8080/videos';

function HomePage() {

    const { videoId } = useParams();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideosAPI = async () => {
            try {
                const response = await axios.get(`${apiURL}`);
                setVideos(response.data);


                let selectedVideoId = videoId || response.data[0].id;
                const selectedVideoResponse = await axios.get(`${apiURL}/${selectedVideoId}`);
                setSelectedVideo(selectedVideoResponse.data);

                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        getVideosAPI();
    }, [videoId]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <main>
            <VideoPlayer video={selectedVideo} />
            <div className='pageHandler'>
                <div className='pageHandler-videoInfoComments'>
                    <VideoInfo video={selectedVideo} />
                    <h4>{selectedVideo?.comments?.length} Comments</h4>
                    <DisplayComments commentsData={selectedVideo} />
                </div>
                <div className='pageHandler-nextVideo'>
                    <RecommendedVideos nextVideo={videos} onVideoSelect={setSelectedVideo} selectedVideo={selectedVideo} />
                </div>
            </div>
            </main>
        </>
    )

}

export default HomePage;

