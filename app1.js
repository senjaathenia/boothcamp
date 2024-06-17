const fs = require('fs')
const readline = require ('readline')
// const Validator = require ('validator')
const getContact = require('./contacts.js')
// const { resolve } = require('path');

function askQuestion(query) {
    return new Promise((resolve) => {
 rl.question(query,(answer) => {
    resolve (answer)
 })
    })
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

// fs.writeFileSync('app.js' , 'utf-8', (err,data) => {
//     if (err) throw err
// console.log(data)
})
// const dirPath = './data'
// if (!fs.existsSync(dirPath)){
//     fs.mkdirSync(dirPath)
// }
// const dataPath = './data/contacts.json'
// if (!fs.existsSync(dataPath))
//     fs.writeFileSync(dataPath, '[]', 'utf-8')
// rl.question(`Nama?`,(nama) => {
// rl.question(`Telp?`, (notelp) =>{
//  rl.question(`Email?`, (email) =>{
//     function contacts(nama, notelp, email, alamat) {
//     }
//     const contact = {nama,notelp,email,alamat}
//     const file = fs.readFileSync('data/contacts.json', 'utf-8')
//     const contacts = JSON.parse(file)
//     contacts.push(contact)
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//     contacts (nama, notelp, email, alamat)
//     console.log(`Terimakasih sudah memasukan data`);
//     rl.close()
// })
// })
// })
// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


async function main() {
    const nama = await askQuestion('Masukkan nama: ');
    const notelp = await askQuestion('Masukkan nomor telepon: ');
    const email = await askQuestion('Masukkan email: ');

    getContact(nama, notelp, email);

    return {
        nama: nama,
        notelp: notelp,
        email: email,
    };
}
const dirPath = './data'
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath))
    fs.writeFileSync(dataPath, '[]', 'utf-8')

// async function main(nama, notelp, email) {
// const contact = (nama, notelp, email)
// const file = fs.readFileSync('data/contacts.json', 'utf-8')
//     const contacts = JSON.parse(file)
//     contacts.push(contact)
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//     contacts (nama, notelp, email, alamat)
//     console.log(`Terimakasih sudah memasukan data`);
//     rl.close()
// }
main();

// // const data = {
// //     nama: 'shilla',
// //     notelp: '0895371890800',
// //     email: 'ratsilahzahra@gmail.com'
// // };

// // const rules = {
// //     name: 'required',
// //     // for multiple rules
// //     notelp: 'required|number', // can be a piped string
// //     email: ['required', 'string'] // can be an array of strings
// // };

// // const v = Validator.make(data, rules);

// // if (v.fails()) {
// //     const errors = v.getErrors();
// //     console.log(errors);
// // }

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const predefinedEmail = "ratsilahzahra@gmail.com";
// const predefinedNotelp = "0895371890800"

// function askQuestion(query) {
//     return new Promise((resolve) => rl.question(query, resolve));
// }
// async function main() {
//     try {
//         const nama = await askQuestion('Nama? ');

//         let email;
//         let isValidEmail = false;
//         while (!isValidEmail) {
//             email = await askQuestion('Email? ');
//             if (email === predefinedEmail) {
//                 isValidEmail = true;
//             } else {
//                 console.log('Email salah, input email benar');
//             }
//         }
// let notelp;
//         let isValidNotelp = false;
//         while (!isValidNotelp) {
//             notelp = await askQuestion('Nomor? ');
//             if (notelp === predefinedNotelp) {
//                 isValidNotelp = true;
//             } else {
//                 console.log('Nomor telepon salah, input nomor telpon yang benar')
//             }
//         }
//         console.log(`Nama ${nama}, Nomor telepon ${notelp}, Email ${email}`);
//     } finally {
//         rl.close();
//     }
// }

// main();
// //test
// // tes