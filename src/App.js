import './app.scss'
import React, { useState } from 'react';

import CreateComment from './components/Comments/CreateComment/CreateComment';
import DisplayComments from './components/Comments/DisplayComment/DisplayComment';
import NavBar from './components/NavBar/NavBar';
import RecommendedVideos from './components/Recommended-Videos/RecommendedVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import videoData from "./data/video-details.json"
import VideoInfo from './components/VideoPlayer/VideoInfo';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  return (
    <>
      <NavBar />
      <VideoPlayer video={selectedVideo} />
      <div className='pageHandler'>
        <VideoInfo video={selectedVideo} />
        <div className='bodyDiv'>

          <h4>{selectedVideo.comments.length} Comments</h4>
          <DisplayComments commentsData={selectedVideo} />
          <h4>NEXT VIDEOS</h4>
          <RecommendedVideos nextVideo={videoData} onVideoSelect={setSelectedVideo} selectedVideo={selectedVideo} />
        </div>

      </div>
    </>
  );
}

export default App;
