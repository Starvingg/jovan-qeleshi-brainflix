import logo from './logo.svg';
import './app.scss'
import NavBar from './components/NavBar/NavBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <>
      <NavBar />
      <div className='bodyDiv'>
        <VideoPlayer />
        
      </div>
    </>
  );
}

export default App;
