import "./RecommendedVideos.scss"
import { Link } from "react-router-dom";

let videoURL = 'http://localhost:8080/'

function RecommendedVideos({ nextVideo, onVideoSelect, selectedVideo }) {
    const filteredVideos = nextVideo.filter(video => video.id !== selectedVideo.id);

    return (
        <>
            <h4 className="headerText" >NEXT VIDEOS</h4>

            {filteredVideos?.map(video => (
                <div className="nextVideo" key={video.id} onClick={() => onVideoSelect(video)}>
                    <Link to={`/video/${video.id}`} > <div className="nextVideo-img">
                        <img src={`${videoURL}${video.image}`} alt={video.title} />
                    </div> </Link>

                    <div className="nextVideo-text">
                        <h4>{video.title}</h4>
                        <p>{video.channel}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RecommendedVideos;


