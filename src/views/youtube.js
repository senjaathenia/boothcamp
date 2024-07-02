import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Kunci API untuk mengakses YouTube Data API
const API_KEY = 'AIzaSyBR6zQBX29B1v8CsrS2Sei44nlNRi6TOUI'; // Ganti dengan API Key Anda

const YoutubeSearch = () => {
  // State untuk menyimpan kata kunci pencarian dari input pengguna
  const [query, setQuery] = useState('');
  // State untuk menyimpan kata kunci pencarian yang dikirim untuk pencarian
  const [searchQuery, setSearchQuery] = useState('');
  // State untuk menyimpan hasil video dari API YouTube
  const [videos, setVideos] = useState([]);
  // State untuk menyimpan video yang dipilih dari hasil pencarian
  const [selectedVideo, setSelectedVideo] = useState(null);

  // useEffect hook untuk melakukan efek samping (fetch data) saat searchQuery berubah
  useEffect(() => {
    const fetchData = async () => {
      // Jika searchQuery kosong atau hanya spasi, reset hasil video dan video yang dipilih
      if (searchQuery.trim() === '') {
        setVideos([]);
        setSelectedVideo(null);
        return;
      }

      try {
        // Mengirim permintaan GET ke YouTube Data API dengan parameter pencarian
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            part: 'snippet',
            maxResults: 5,
            q: searchQuery,
            type: 'video',
          }
        });
        // Menyimpan hasil video ke state videos
        setVideos(response.data.items);
        // Menyimpan video pertama dari hasil pencarian sebagai video yang dipilih
        setSelectedVideo(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching videos from YouTube API:', error);
      }
    };

    fetchData(); 
  }, [searchQuery]); // useEffect akan dijalankan setiap kali searchQuery berubah

  // Fungsi untuk menangani pemilihan video dari hasil pencarian
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  // Fungsi untuk menangani pengiriman formulir pencarian
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman
    setSearchQuery(query); // Mengupdate searchQuery dengan nilai query
  };

  return (
    <div className="youtube-search-container">
      <div className="search-container">
        <div className="logo-title">
          <img src="../img/youtube.png" alt="YouTube Logo" className="logo" />
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for videos..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="video-and-thumbnails">
        <div className="video-details">
          {selectedVideo && (
            <>
              <div className="video-player">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                  title={selectedVideo.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <h2>{selectedVideo.snippet.title}</h2>
                <p>{selectedVideo.snippet.description}</p>
              </div>
            </>
          )}
        </div>
        <div className="thumbnail-list">
          {videos.map(video => (
            <div key={video.id.videoId} className="thumbnail-item" onClick={() => handleVideoSelect(video)}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="thumbnail"
              />
              <h3>{video.snippet.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeSearch;
