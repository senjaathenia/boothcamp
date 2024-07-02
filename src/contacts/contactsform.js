// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [nama, setNama] = useState('');
  const [notelp, setNoTelp] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !notelp || !email) {
      alert('Mohon lengkapi semua bidang');
      return;
    }
    addContact({ nama, notelp, email });
    setNama('');
    setNoTelp('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama:</label>
      <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
      <br />
      <label>No. Telepon:</label>
      <input type="text" value={notelp} onChange={(e) => setNoTelp(e.target.value)} required />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <button type="submit">Tambah Kontak</button>
    </form>
  );
};

export default ContactForm;
