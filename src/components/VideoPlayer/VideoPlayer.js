import "./VideoPlayer.scss";
import "../../data/video-details.json"

let videoURL = 'http://localhost:8080/'

function VideoPlayer({ video }) {
    return (
        <>
            <div className="videoComponent">
                <video className="videoComponent-controller" controls poster={`${videoURL}${video.image}`} />
            </div>
        </>
    )

}

export default VideoPlayer;