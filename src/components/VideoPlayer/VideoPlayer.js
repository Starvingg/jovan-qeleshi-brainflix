import "./VideoPlayer.scss";
import posterImage from "../../assets/images/Upload-video-preview.jpg"
import viewIcon from "../../assets/Icons/views.svg"
import heartIcon from "../../assets/Icons/likes.svg"

function VideoPlayer() {
    return (
        <>
            <div className="videoComponent">
                <video className="videoComponent-controller" controls poster={posterImage} />

                <div className="videoComponent-infoContainer">

                    <div className="videoComponent-infoContainer-title">
                        <h1>The Future of Artifical Intelligence</h1>
                    </div>

                    <div className="videoComponent-infoContainer-details">

                        <div className="videoComponent-infoContainer-details-author">
                            <h3>By Aiden Thompson</h3>
                            <p>08/08/2023</p>
                        </div>
                        <div className="videoComponent-infoContainer-details-viewsLikes">
                            <div>
                                <div>
                                    <img src={viewIcon} />
                                    <div></div>
                                    <p>980,544</p>
                                </div>
                                <div>
                                    <img src={heartIcon} />
                                    <div></div>
                                    <p>22,479</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="videoComponent-infoContainer-fullInfo">
                        <p>Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years.
                            From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements,
                            this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate
                            interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
                    </div>
                </div>

            </div>
        </>
    )

}

export default VideoPlayer;