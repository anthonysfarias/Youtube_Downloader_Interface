import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VideoDownloader: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  const handleVideoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (videoUrl) {
      const promise = new Promise<void>((resolve) => {
        // Simulando uma operação assíncrona
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      toast.promise(
        promise,
        {
          pending: "Downloading video...",
          success: "Video downloaded successfully!",
          error: "Failed to download video.",
        }
      );
    } else {
      toast.error("Video URL is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form
        onSubmit={handleSubmit}
        className="md:max-w-md md:w-full md:bg-white md:bg-opacity-30 md:backdrop-filter md:backdrop-blur-md md:rounded-md md:shadow-md md:p-6 lg:max-w-lg lg:w-full lg:bg-white lg:bg-opacity-30 lg:backdrop-filter lg:backdrop-blur-lg lg:rounded-lg lg:shadow-md lg:p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          YouTube Video Downloader
        </h2>
        <div className="mb-4">
          <label
            htmlFor="video-url"
            className="text-sm font-medium text-gray-300"
          >
            Video URL:
          </label>
          <input
            type="text"
            id="video-url"
            name="video-url"
            value={videoUrl}
            onChange={handleVideoUrlChange}
            className="block w-full p-2 bg-transparent border-rose-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm mt-1 text-white placeholder-gray-300"
            placeholder="Enter the video URL"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Download
        </button>
      </form>
    </div>
  );
};

export default VideoDownloader;
