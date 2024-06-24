const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const { log } = require('console');
const pool = require("./db");

app.use(express.json())
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL database');
    client.release(); // Release the client back to the pool
});

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function readContactsFile(callback) {
    const filePath = path.join(__dirname, 'contacts.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        try {
            const contacts = JSON.parse(data);
            callback(null, contacts);
        } catch (parseError) {
            callback(parseError, null);
        }
    });
}
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
// Fungsi untuk menulis ke file contacts.json


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contacts', (req, res) => {
    const filePath = path.join(__dirname, 'contacts.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the contacts file');
            return;
        }
        try {
            const contacts = JSON.parse(data);
            res.render('contact', { contacts: contacts });
        } catch (parseError) {
            res.status(500).send('Error parsing the contacts file');
        }
    });
});
app.get('/tambah', (req, res) => {
    res.render('tambah');
});

app.post('/addContact', async (req, res) => {
    const { nama, notelp, email } = req.body;
    try {
        const newContact = await pool.query(
            'INSERT INTO contacts (nama, notelp, email) VALUES ($1, $2, $3)',
            [nama, notelp, email]
        );
        res.redirect('/contact');
    } catch (err) {
        console.error('Error adding contact:', err);
        res.status(500).send('Error adding contact');
    }
});
app.get("/addasync", async(req,res) => {
    try{
        const nama = "shilla"
        const notelp = "0895371890800"
        const email = "ratsilahzahra@gmail.com"
        const newCont = await pool.query(`INSERT INTO contact values
        ('${nama}','${notelp}','${email}') RETURNING *`)
        res.json(newCont)
    } catch (err) {
        console.error(err.message);
    }
})
app.get('/edit/:nama', (req, res) => {
    const contactName = req.params.nama;
    readContactsFile((err, contacts) => {
        if (err) {
            res.status(500).send('Error reading contacts file');
            return;
        }
        const contact = contacts.find(c => c.nama === contactName);
        if (!contact) {
            res.status(404).send('Contact not found');
            return;
        }
        res.render('edit', { contact: contact });
    });
});

// Simpan perubahan pada kontak
app.post('/edit/:nama', async (req, res) => {
    const contactName = req.params.nama;
    const { notelp, email } = req.body;
    try {
        const result = await pool.query(
            'UPDATE contacts SET notelp = $1, email = $2 WHERE nama = $3',
            [notelp, email, contactName]
        );
        res.redirect('/contact'); // Redirect ke halaman kontak setelah berhasil diupdate
    } catch (err) {
        console.error('Error updating contact:', err);
        res.status(500).send('Error updating contact');
    }
});

app.post('/hapus/:nama', async (req, res) => {
    const contactName = req.params.nama;
    try {
        const result = await pool.query(
            'DELETE FROM contacts WHERE nama = $1',
            [contactName]
        );
        res.redirect('/contacts'); // Redirect ke halaman kontak setelah berhasil dihapus
    } catch (err) {
        console.error('Error deleting contact:', err);
        res.status(500).send('Error deleting contact');
    }
});

// Route untuk menampilkan detail kontak berdasarkan nama
// app.get('/contact/:nama', (req, res) => {
//     const contactName = req.params.nama;
//     readContactsFile((err, contacts) => {
//         if (err) {
//             console.error('Error reading contacts file:', err);
//             res.status(500).send('Error reading contacts file');
//             return;
//         }
//         const contact = contacts.find(c => c.nama === contactName);
//         if (!contact) {
//             console.log(`Contact with name ${contactName} not found`);
//             res.status(404).send('Contact not found');
//             return;
//         }
//         res.render('detailcontact', { contact: contact });
//     });
// });
app.get('/contact/:nama', async (req, res) => {
    const contactName = req.params.nama;
    try {
        const contact = await pool.query('SELECT * FROM contacts WHERE nama = $1', [contactName]);
        if (contact.rows.length === 0) {
            res.status(404).send('Contact not found');
        } else {
            res.render('detailcontact', { contact: contact.rows[0] });
        }
    } catch (err) {
        console.error('Error retrieving contact:', err.message);
        res.status(500).send('Error retrieving contact');
    }
});

app.get('/produk/:id', (req, res) => {
    res.send('product id: ' + req.params.id);
});

app.use((req, res) => {
    res.status(404).send('Page not found 404');
});

