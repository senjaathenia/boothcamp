import React, { useState } from 'react';
import axios from 'axios';

// Kunci akses untuk API Unsplash
const ACCESS_KEY = 'sro8BtA0Kc5RR1qNkbFfaedSczmqh0arOJ5hMj2Tjw4';

const PhotoSearch = () => {
  // State untuk menyimpan kata kunci pencarian
  const [query, setQuery] = useState('');
  // State untuk menyimpan hasil foto dari API
  const [photos, setPhotos] = useState([]);

  // Fungsi yang dipanggil saat formulir pencarian dikirim
  const handleSearch = async (event) => {
    event.preventDefault(); // Mencegah reload halaman saat formulir dikirim

    try {
      // Mengirim permintaan GET ke API Unsplash dengan kata kunci pencarian
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: query, per_page: 10 }, // Mengirim parameter pencarian
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}` // Menambahkan header otorisasi
        }
      });

      // Menyimpan hasil foto ke state
      setPhotos(response.data.results);
    } catch (error) {
      // Menangani kesalahan jika permintaan gagal
      console.error('Error fetching photos from Unsplash:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Unsplash Photo Search</h1>
      {/* Formulir pencarian */}
      <form onSubmit={handleSearch} className="form-inline justify-content-center mb-4">
        <input
          type="text" // Input teks untuk kata kunci pencarian
          value={query} // Menghubungkan nilai input dengan state query
          onChange={(e) => setQuery(e.target.value)} // Mengupdate state saat pengguna mengetik
          placeholder="Search for photos"
          className="form-control mr-2 wide-input"
          required // Menandakan bahwa input ini wajib diisi
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <div className="photo-results">
        {/* Melakukan iterasi melalui array photos dan menampilkan setiap foto */}
        {photos.map(photo => (
          <div key={photo.id} className="photo">
            <img src={photo.urls.small} alt={photo.alt_description || 'Photo'} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSearch;
