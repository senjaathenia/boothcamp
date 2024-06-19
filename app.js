const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan')

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

// Fungsi untuk menulis ke file contacts.json
function writeContactsFile(contacts, callback) {
    const filePath = path.join(__dirname, 'contacts.json');
    fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
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
// app.get('/tambah', (req, res) => {
//     res.render('tambah');
// });
// app.post('/addContact', (req, res) => {
//     const { nama, notelp, email } = req.body;
//     const filePath = path.join(__dirname, 'contacts.json');
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             res.status(500).send('Error reading the contacts file');
//             return;
//         }
//         let contacts = [];
//         if (data) {
//             contacts = JSON.parse(data);
//         }
//         contacts.push({ nama, notelp, email });
//         fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
//             if (err) {
//                 res.status(500).send('Error writing to the contacts file');
//                 return;
//             }
//             res.redirect('/contact');
//         });
//     });
// });
// app.get('/edit/:nama', (req, res) => {
//     const contactName = req.params.nama;
//     readContactsFile((err, contacts) => {
//         if (err) {
//             res.status(500).send('Error reading contacts file');
//             return;
//         }
//         const contact = contacts.find(c => c.nama === contactName);
//         if (!contact) {
//             res.status(404).send('Contact not found');
//             return;
//         }
//         res.render('edit', { contact: contact });
//     });
// });

// // Simpan perubahan pada kontak
// app.post('/edit/:nama', (req, res) => {
//     const contactName = req.params.nama;
//     const { nama, notelp, email } = req.body;
//     readContactsFile((err, contacts) => {
//         if (err) {
//             res.status(500).send('Error reading contacts file');
//             return;
//         }
//         const contactIndex = contacts.findIndex(c => c.nama === contactName);
//         if (contactIndex === -1) {
//             res.status(404).send('Contact not found');
//             return;
//         }
//         contacts[contactIndex] = { ...contacts[contactIndex], nama, notelp, email };
//         writeContactsFile(contacts, (err) => {
//             if (err) {
//                 res.status(500).send('Error writing to contacts file');
//                 return;
//             }
//             res.redirect('/contact');
//         });
//     });
// });
// app.post('/hapus/:nama', (req, res) => {
//     const contactName = req.params.nama;
//     console.log(`Menghapus kontak dengan nama: ${contactName}`);  // Log nama kontak yang akan dihapus

//     readContactsFile((err, contacts) => {
//         if (err) {
//             res.status(500).send('Error reading contacts file');
//             return;
//         }
//         const updatedContacts = contacts.filter(c => c.nama !== contactName);
//         writeContactsFile(updatedContacts, (err) => {
//             if (err) {
//                 res.status(500).send('Error writing to contacts file');
//                 return;
//             }
//             res.redirect('/contact');
//         });
//     });
// });
app.get('/produk/:id', (req, res) => {
    res.send('product id: ' + req.params.id);
});

app.use((req, res) => {
    res.status(404).send('Page not found 404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
