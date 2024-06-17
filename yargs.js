const yargs = require("yargs");
const fs = require("fs");
const dataPath = './data/contacts.json';

// Load contacts from JSON file
const loadContacts = () => {
    try {
        const file = fs.readFileSync(dataPath, "utf-8");
        return JSON.parse(file) || []; // Handle case where file is empty or not valid JSON
    } catch (error) {
        console.error('Error reading contacts file:', error.message);
        return [];
    }
};

// Save contacts to JSON file
const saveData = (contacts) => {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2), "utf8");
        console.log('Contacts saved to contacts.json');
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

// Initialize contacts array by loading from file
let contacts = loadContacts();

yargs.command({
    command: 'add',
    describe: 'Add new contact',
    builder: {
        nama: {
            describe: 'Contact Nama',
            demandOption: true,
            type: 'string'
        },
        notelp: {
            describe: 'Contact No Telepon',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Contact email',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv) {
        const id = contacts.length + 1;
        const newContact = {
            id: id,
            nama: argv.nama, // Menggunakan argv.nama sesuai dengan definisi builder
            email: argv.email || '',
            mobile: argv.notelp // Menggunakan argv.notelp sesuai dengan definisi builder
        };
        contacts.push(newContact);
        saveData(contacts);
        console.log('Contact added:', newContact);
    }
});

// Command to list all contacts
yargs.command({
    command: 'list',
    describe: 'List all contacts',
    handler() {
        console.log('Listing all contacts:');
        if (contacts.length === 0) {
            console.log('No contacts found.');
        } else {
            contacts.forEach(contact => {
                console.log(`Nama: ${contact.nama}, Notelp: ${contact.notelp}, Email: ${contact.email}`);
            });
        }
    }
});
// Command to show details of a specific contact
yargs.command({
    command: 'detail',
    describe: 'Show details of a specific contact',
    builder: {
        id: {
            describe: 'Contact ID',
            demandOption: true,
            type: 'number' // Assuming contact ID is stored as number
        },
    },
    handler(argv) {
        const contacts = loadContacts();
        const contact = contacts.find(contact => contact.id === argv.id);

        if (contact) {
            console.log('Contact details:');
            console.log(`- Nama: ${contact.nama}`);
            console.log(`- No Telepon: ${contact.notelp}`);
            console.log(`- Email: ${contact.email}`);
        } else {
            console.log('Contact not found');
        }
    }
});
// Command to update a contact
yargs.command({
    command: 'update',
    describe: 'Update a contact',
    builder: {
        nama: {
            describe: 'Contact  Nama',
            demandOption: true,
            type: 'string'
        },
        notelp: {
            describe: 'Contact No Telepon',
            demandOption: false,
            type: 'string'
        },
        email: {
            describe: 'Contact Email',
            demandOption: false,
            type: 'string'
        },
    },
    handler(argv) {
        const index = contacts.findIndex(contact => contact.id === argv.id);
        if (index !== -1) {
            if (argv.nama) contacts[index].nama = argv.nama;
            if (argv.notelp) contacts[index].notelp = argv.notelp;
            if (argv.email) contacts[index].email = argv.email;
            saveData(contacts);
            console.log('Contact updated:', contacts[index]);
        } else {
            console.log('Contact not found');
        }
    }
});

// Command to delete a contact
yargs.command({
    command: 'delete',
    describe: 'Delete a contact by ID',
    builder: {
        id: {
            describe: 'Contact ID to delete',
            demandOption: true,
            type: 'number'
        },
    },
    handler(argv) {
        let contacts = loadContacts();

        const index = contacts.findIndex(contact => contact.id === argv.id);
        if (index !== -1) {
            const deletedContact = contacts.splice(index, 1)[0]; // Ambil elemen pertama dari array yang dihapus
            saveData(contacts);
            console.log('Contact deleted:', deletedContact);
        } else {
            console.log('Contact not found');
        }
    }
});
yargs.parse();
