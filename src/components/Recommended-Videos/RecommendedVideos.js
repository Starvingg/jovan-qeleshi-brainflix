import "./RecommendedVideos.scss"

function RecommendedVideos({ nextVideo, onVideoSelect, selectedVideo }) {
    const filteredVideos = nextVideo.filter(video => video.id !== selectedVideo.id);

    return (
        <>
            {filteredVideos.map(video => (
                <div className="nextVideo" key={video.id} onClick={() => onVideoSelect(video)}>
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