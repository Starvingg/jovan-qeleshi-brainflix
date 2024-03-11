import "./RecommendedVideos.scss"

function RecommendedVideos({ nextVideo }) {
    return (
        <>
            {nextVideo.map(video => (
                <div className="nextVideo" >

                    <div className="nextVideo-img">
                        <img src={video.image} alt={video.title} />
                    </div>

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