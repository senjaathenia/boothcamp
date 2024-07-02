import React, { useState } from 'react';
import axios from 'axios';

const AddContact = ({ onAddContact }) => {
  const [nama, setNama] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/contacts', {
        nama,
        noTelp,
        email
      });
      console.log('Response from server:', response.data);
      onAddContact(response.data); // Call the prop function to update Contacts component
      window.location.href = '/contacts'; // Redirect to Contacts page after successful save
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
        </label>
        <br />
        <label>
          No Telepon:
          <input type="text" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default AddContact;
