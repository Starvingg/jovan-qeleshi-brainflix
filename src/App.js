import './app.scss'
import CreateComment from './components/Comments/CreateComment/CreateComment';
import DisplayComments from './components/Comments/DisplayComment/DisplayComment';
import NavBar from './components/NavBar/NavBar';
import RecommendedVideos from './components/Recommended-Videos/RecommendedVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import nextVideo from "./data/videos.json"

function App() {
  return (
    <>
      <NavBar />
      <div className='bodyDiv'>
        <VideoPlayer />
        <h4>3 Comments</h4>
        <CreateComment />
        <DisplayComments />
        <h4>NEXT VIDEOS</h4>
        <RecommendedVideos nextVideo = {nextVideo}/>
      </div>
    </>
  );
}

export default App;
