import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleAddContact = () => {
    // Redirect ke halaman form tambah data
    window.location.href = '/addcontact';
  };

  return (
    <div>
      <h1>Contacts Page</h1>
      <button onClick={handleAddContact}>Tambah Kontak</button> {/* Tombol untuk ke halaman tambah kontak */}
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>No Telepon</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.nama}</td>
              <td>{contact.noTelp}</td>
              <td>{contact.email}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(contact.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
