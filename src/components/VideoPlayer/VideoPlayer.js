import "./VideoPlayer.scss";
import posterImage from "../../assets/images/Upload-video-preview.jpg"
import viewIcon from "../../assets/Icons/views.svg"
import heartIcon from "../../assets/Icons/likes.svg"

import "../../data/video-details.json"

function VideoPlayer({video}) {

    return (
        <>
            <div className="videoComponent">
                <video className="videoComponent-controller" controls poster={video.image} />

                <div className="videoComponent-infoContainer">

                    <div className="videoComponent-infoContainer-title">
                        <h1>{video.title}</h1>
                    </div>

                    <div className="videoComponent-infoContainer-details">

                        <div className="videoComponent-infoContainer-details-author">
                            <h3>{video.channel}</h3>
                            <p>{video.timestamp}</p>
                        </div>
                        <div className="videoComponent-infoContainer-details-viewsLikes">
                            <div>
                                <div>
                                    <img src={viewIcon} />
                                    <div></div>
                                    <p>{video.views}</p>
                                </div>
                                <div>
                                    <img src={heartIcon} />
                                    <div></div>
                                    <p>{video.likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="videoComponent-infoContainer-fullInfo">
                        <p>{video.description}</p>
                    </div>
                </div>

            </div>
        </>
    )

}

export default VideoPlayer;