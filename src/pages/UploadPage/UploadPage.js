
import { upload } from "@testing-library/user-event/dist/upload";
import uploadImage from "../../assets/images/Upload-video-preview.jpg"




function UploadPage() {
    return (
        <>
            <h1>Upload Video</h1>
            <div className="uploadPage">
                <img src={uploadImage} ></img>

                <form>
                    <div>
                        <h3>Title Your Video</h3>
                        <label htmlFor="title">Title Your Video</label>
                        <input type="text" id="title" name="title" />
                    </div>
                    <div>
                        <h3>Add a video Description</h3>

                        <label htmlFor="description">Add Description</label>
                        <textarea id="description" name="description"></textarea>
                    </div>
                    <button type="submit">Upload</button>
                </form>


            </div>

        </>
    )
}

export default UploadPage;