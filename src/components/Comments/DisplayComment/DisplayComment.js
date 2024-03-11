import CreateComment from "../CreateComment/CreateComment";
import "./DisplayComment.scss"


function formattedDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

function DisplayComments({ commentsData }) {

    const comments = commentsData.comments;

    return (
        <>
            <CreateComment />

            {comments.map(comment => (
            <div className="comment" key={comment.id}>
                <div className="comment-image">
                    <div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="comment-information">
                    <div className="comment-information-nameDate">
                        <h4>{comment.name}</h4>
                        <p>{formattedDate(comment.timestamp)}</p>
                    </div>
                    <div className="comment-information-commentInfo">
                        <p>{comment.comment}</p>
                    </div>
                </div>
            </div>
            ))}

        </>
    );
}



export default DisplayComments;
