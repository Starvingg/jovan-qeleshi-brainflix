import "./CreateComment.scss"
import profileImage from "../../../assets/images/Mohan-muruge.jpg"
import commentIcon from "../../../assets/Icons/add_comment.svg"

function CreateComment() {
    return (
        <>
            <div className="createComment">

                <div className="createComment-image">
                    <img src={profileImage} />
                </div>

                <div className="createComment-commentBox">
                    <div>
                        <h3>JOIN THE CONVERSATION</h3>
                        <form onSubmit={() => { }}>
                            <input type='text' placeholder='Add a new comment' />
                        </form>
                    </div>
                    <div className="createComment-commentBox-button">
                    <button>
                            <img src={commentIcon} alt='Upload Button'/>
                            COMMENT</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateComment;