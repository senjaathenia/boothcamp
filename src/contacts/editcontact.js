// src/components/EditContactForm.js
import React, { useState, useEffect } from 'react';

const EditContactForm = ({ contact, updateContact, cancelEditing }) => {
  const [editedNama, setEditedNama] = useState(contact.nama);
  const [editedNoTelp, setEditedNoTelp] = useState(contact.notelp);
  const [editedEmail, setEditedEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      ...contact,
      nama: editedNama,
      notelp: editedNoTelp,
      email: editedEmail
    };
    updateContact(updatedContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama:</label>
      <input
        type="text"
        value={editedNama}
        onChange={(e) => setEditedNama(e.target.value)}
        required
      />
      <br />
      <label>No. Telepon:</label>
      <input
        type="text"
        value={editedNoTelp}
        onChange={(e) => setEditedNoTelp(e.target.value)}
        required
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={editedEmail}
        onChange={(e) => setEditedEmail(e.target.value)}
        required
      />
      <br />
      <button type="submit">Simpan Perubahan</button>
      <button type="button" onClick={cancelEditing}>Batal</button>
    </form>
  );
};

export default EditContactForm;
