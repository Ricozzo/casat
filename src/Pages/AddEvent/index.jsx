import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState(""); // Armazena a imagem selecionada
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setUploading(true);

    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(`${import.meta.env.VITE_APP_SERVER_URL}/api/upload`, uploadData)
      .then((response) => {
        setImgUrl(response.data.fileUrl);
        console.log(imgUrl);
        setUploading(false);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      title,
      description,
      imgUrl,
    };

    axios
      .post(`${API_URL}/api/events`, body)
      .then((response) => {
        setTitle("");
        setDescription("");
        setImgUrl("");
        navigate("/events");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-event">
      <h3>Add Event</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => handleImageChange(e)} // Chame a função handleImageChange para atualizar a imagem selecionada
        />
        {uploading ? (
          <p>Image Uploading, please wait</p>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
}

export default AddEvent;
