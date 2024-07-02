const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const pool = require("./db"); // File konfigurasi pool database PostgreSQL
const cors = require('cors');

app.use(express.json());
const port = 3001;

app.use(cors());

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Endpoint untuk mendapatkan semua kontak
app.get('/contacts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts');
        const contacts = result.rows;
        res.render('contacts', { contacts });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Endpoint untuk menambah kontak baru
// Endpoint untuk menambah kontak baru
app.post('/addContact', async (req, res) => {
    const { nama, notelp, email } = req.body;
    try {
        // Masukkan data ke dalam tabel contacts
        const newContact = await pool.query(
            'INSERT INTO contacts (nama, notelp, email) VALUES ($1, $2, $3) RETURNING *',
            [nama, notelp, email]
        );

        // Redirect kembali ke halaman contacts setelah berhasil menambahkan
        res.redirect('/contacts');
    } catch (err) {
        console.error('Error adding contact:', err);
        res.status(500).send('Error adding contact');
    }
});


// Endpoint untuk menghapus kontak
app.post('/deleteContact/:id', async (req, res) => {
    const contactId = req.params.id;
    try {
        // Hapus kontak berdasarkan ID
        const result = await pool.query(
            'DELETE FROM contacts WHERE id = $1',
            [contactId]
        );

        // Redirect kembali ke halaman contacts setelah berhasil menghapus
        res.redirect('/contacts');
    } catch (err) {
        console.error('Error deleting contact:', err);
        res.status(500).send('Error deleting contact');
    }
});

// Endpoint untuk mengedit kontak
app.post('/editContact/:id', async (req, res) => {
    const contactId = req.params.id;
    const { nama, notelp, email } = req.body;
    try {
        // Update kontak berdasarkan ID
        const result = await pool.query(
            'UPDATE contacts SET nama = $1, notelp = $2, email = $3 WHERE id = $4',
            [nama, notelp, email, contactId]
        );

        // Redirect kembali ke halaman contacts setelah berhasil mengedit
        res.redirect('/contacts');
    } catch (err) {
        console.error('Error updating contact:', err);
        res.status(500).send('Error updating contact');
    }
});

// Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).send('Halaman tidak ditemukan');
});

console.log('Server berjalan di http://localhost:3001');
