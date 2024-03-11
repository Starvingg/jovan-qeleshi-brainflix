import './app.scss'
import React, {useState} from 'react';

import CreateComment from './components/Comments/CreateComment/CreateComment';
import DisplayComments from './components/Comments/DisplayComment/DisplayComment';
import NavBar from './components/NavBar/NavBar';
import RecommendedVideos from './components/Recommended-Videos/RecommendedVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import videoData from "./data/video-details.json"

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  return (
    <>
      <NavBar />
      <div className='bodyDiv'>
        <VideoPlayer video={selectedVideo} />
        <h4>3 Comments</h4>
        <DisplayComments commentsData = {selectedVideo}/>
        <h4>NEXT VIDEOS</h4>
        <RecommendedVideos nextVideo={videoData} onVideoSelect={setSelectedVideo} selectedVideo={selectedVideo} />
      </div>
    </>
  );
}

export default App;
