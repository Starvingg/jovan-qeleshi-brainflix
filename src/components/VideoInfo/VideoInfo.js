import "./VideoInfo.scss";
import viewIcon from "../../assets/Icons/views.svg"
import heartIcon from "../../assets/Icons/likes.svg"

import "../../data/video-details.json"

function VideoInfo({ video }) {

    const timeStamp = video.timestamp;
    const date = new Date(timeStamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    const formattedDate = `${month}/${day}/${year}`;
    return (
        <>
            <div className="videoComponent">
                <div className="videoComponent-infoContainer">

                    <div className="videoComponent-infoContainer-title">
                        <h1>{video.title}</h1>
                    </div>
                    <div className="videoComponent-infoContainer-details">
                        <div className="videoComponent-infoContainer-details-author">
                            <h2>{video.channel}</h2>
                            <p>{formattedDate}</p>
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

export default VideoInfo;