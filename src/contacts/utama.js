import React from 'react';

const Utama = () => {
  const currentPath = window.location.pathname;

  const renderPageContent = () => {
    if (currentPath === '/about') {
      return (
        <div>
          <h1>About Page</h1>
          <p>Ini adalah halaman About.</p>
        </div>
      );
    } else if (currentPath === '/contacts') {
      return (
        <div>
          <h1>Contacts Page</h1>
          {/* Tambahkan komponen Contacts atau kode untuk menampilkan kontak */}
        </div>
      );
    } else {
      // Halaman utama, misalnya
      return (
        <div>
          <h1>Halaman Utama</h1>
          <p>Selamat datang di halaman utama.</p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderPageContent()}
    </div>
  );
};

export default Utama;
