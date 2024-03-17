import './app.scss'
import React, { useState } from 'react';

import CreateComment from './components/Comments/CreateComment/CreateComment';
import DisplayComments from './components/Comments/DisplayComment/DisplayComment';
import NavBar from './components/NavBar/NavBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import videoData from "./data/video-details.json"
import VideoInfo from './components/VideoInfo/VideoInfo';

import HomePage from './pages/HomePage/HomePage';

import { Route, Routes } from 'react-router-dom';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />}/> 
      </Routes>


    </>
  );
}

export default App;
