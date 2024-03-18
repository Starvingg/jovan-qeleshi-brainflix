
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import DisplayComments from "../../components/Comments/DisplayComment/DisplayComment";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import axios from "axios";

import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

import videoData from "../../data/video-details.json"

const apiURL = 'https://unit-3-project-api-0a5620414506.herokuapp.com/videos';
const apiKEY = '?api_key=77e0d206-dee2-4ac6-a718-50ed76a85a99';


function HomePage() {

    const {videoId} = useParams();
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function getVideosAPI(){
            try {
                const response = await axios.get(`${apiURL}${apiKEY}`);
                setVideos(response.data)
                console.log(response.data);
            } catch (error) {
                console.log(error)
            }
        } 
        getVideosAPI();
    }, [])

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

