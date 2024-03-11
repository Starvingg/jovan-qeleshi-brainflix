import "./VideoPlayer.scss";
import "../../data/video-details.json"

function VideoPlayer({ video }) {
    return (
        <>
            <div className="videoComponent">
                <video className="videoComponent-controller" controls poster={video.image} />
            </div>
        </>
    )

}

export default VideoPlayer;