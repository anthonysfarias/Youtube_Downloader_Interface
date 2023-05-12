import React, { useState } from 'react'

const VideoDownloader: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('')

  const handleVideoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`Downloading video from ${videoUrl}`)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-white mb-4">YouTube Video Downloader</h2>
        <div className="mb-4">
          <label htmlFor="video-url" className="text-sm font-medium text-gray-300">
            Video URL:
          </label>
          <input
            type="text"
            id="video-url"
            name="video-url"
            value={videoUrl}
            onChange={handleVideoUrlChange}
            className="block w-full bg-transparent border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm mt-1 text-white placeholder-gray-300"
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
  )
}

export default VideoDownloader
