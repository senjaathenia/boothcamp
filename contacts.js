const fs = require('fs');
const dirPath = './data'
const dataPath = './data/contacts.json'

function ensureDirectoryExists(path) {
    if (!fs.existsSync(path)){
        fs.mkdirSync (path);
    }
}
function ensureFileExists(path, defaultContent){
    
if (!fs.existsSync(path)) {
     fs.writeFileSync (path, defaultContent, "utf-8")
}
}
ensureDirectoryExists(dirPath);
ensureFileExists(dataPath, '[]');

function getContact(nama, notelp, email) {
    const contact = [{nama, notelp, email}]
    try {
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
        console.log(`Terimakasih sudah memasukan data`);
    } catch (error) {
        console.error("Error:", error);
    }
}
module.exports = getContact
