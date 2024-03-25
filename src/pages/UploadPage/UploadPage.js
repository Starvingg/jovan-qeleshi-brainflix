import uploadImage from "../../assets/images/Upload-video-preview.jpg"
import { useState } from "react";
import axios from "axios";




function UploadPage() {

    const [formData, setFormData] = useState({title: '', description: ''})

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/videos', formData);
            console.log(response.data);
            setFormData({
                title: '',
                description: ''
            });
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <>
            <h1>Upload Video</h1>
            <div className="uploadPage">
                <img src={uploadImage} ></img>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Title Your Video</h3>
                        <label htmlFor="title">Title Your Video</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <div>
                        <h3>Add a video Description</h3>

                        <label htmlFor="description">Add Description</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit">Upload</button>
                </form>
            </div>

        </>
    )
}

export default UploadPage;