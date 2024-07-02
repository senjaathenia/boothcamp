import React, { useState, useEffect } from 'react';

const Jam = () => {
  // State untuk menyimpan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Fungsi untuk memperbarui waktu
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    // Atur interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(updateClock, 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format waktu menjadi string yang mudah dibaca
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <center>
    <div>
      <h1>JAM</h1>
      <p>{formatTime(currentTime)}</p>
    </div>
    </center>
  );
};

export default Jam;
