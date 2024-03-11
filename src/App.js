import './app.scss'
import CreateComment from './components/Comments/CreateComment/CreateComment';
import DisplayComments from './components/Comments/DisplayComment/DisplayComment';
import NavBar from './components/NavBar/NavBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <>
      <NavBar />
      <div className='bodyDiv'>
        <VideoPlayer />
        <CreateComment />
        <DisplayComments />
      </div>
    </>
  );
}

export default App;
