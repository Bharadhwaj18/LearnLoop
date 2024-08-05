# LearnLoop

LearnLoop is an educational short video platform designed to facilitate learning through engaging and concise video content. This platform allows users to upload, view, and interact with short educational videos.

## Features

- **Video Upload:** Users can upload educational videos.
- **Video Playback:** Stream videos directly on the platform.
- **Interactive UI:** User-friendly interface for easy navigation and interaction.
- **Video Storage:** Videos are securely stored using Cloudinary.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/learnloop.git
    cd learnloop
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4. **Run the application:**
    ```sh
    npm run dev
    ```

    This will start both the frontend and backend servers concurrently.

## Usage

1. **Upload videos** by clicking the "Upload" button and selecting a video from your device.
2. **Browse videos** on the homepage and interact with content by liking and commenting.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact us at [shreyasbharadhwaj18@gmail.com](mailto: shreyasbharadhwaj18@gmail.com).