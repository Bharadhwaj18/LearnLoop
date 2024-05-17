import { useEffect, useRef, useState } from "react";
import axios from "axios";
// const dotenv = require("dotenv");

// dotenv.config();

// To upload the Videos to cloudinary
const UploadWidget = () => {
  const [pressed, setPressed] = useState(false);
  const [link, setLink] = useState("");

  const [videoDetails, setVideoDetails] = useState({
    url: "",
    heading: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoDetails({
      ...videoDetails,
      [name]: value,
      url: link,
    });
    console.log(videoDetails);
  };

  const cloudinaryRef = useRef();
  const WidgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log(cloudinaryRef.current);
    WidgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "djbvoo2kt",
        uploadPreset: "g6d5uwxd",
        resourceType: "video",
        clientAllowedFormats: [
          "mp4",
          "webm",
          "ogg",
          "avi",
          "flv",
          "mov",
          "mkv",
        ],
        transformation: [
          {
            width: 1080 / 4,
            height: 1920 / 4,
            crop: "pad",
            background: "black",
            aspect_ratio: "9:16",
            quality: "auto",
          },
        ],
        maxFiles: 1,
      },
      function (error, result) {
        if (result && result.event === "success") {
          console.log("Upload Widget Result:", result.info);
          setLink(result.info.url);
          console.log(link);
        }
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("Submit Pressed");
    try {
      const response = await axios.post(
        "http://localhost:9000/v2/posts/",
        videoDetails
      );
      console.log(response.data);
      alert("Video Data saved Successfully");
      setPressed(false);
      setVideoDetails({ url: "", heading: "", description: "" });
    } catch (error) {
      console.log(error);
      alert("Video Data failed to save successfully");
    }
  };

  return (
    <div>
      <button className="uploadButton" onClick={() => setPressed(!pressed)}>
        Upload Videos
      </button>

      {pressed && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setPressed(!pressed)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              {/* Title Input Field */}
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="heading"
                  value={videoDetails.heading}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Description Input FIeld */}
              <div>
                <label>Description:</label>
                <textarea
                  value={videoDetails.description}
                  name="description"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formButtons">
                <button
                  className="uploadtoCloud"
                  onClick={(e) => {
                    e.preventDefault();
                    WidgetRef.current.open();
                  }}
                >
                  Upload Video
                </button>
                <button type="submit" className="formSubmit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
