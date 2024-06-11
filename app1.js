// const fs = require('fs');
// const readline = require ('readline')
// const Validator = require ('validator')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// // fs.fs('app.js' , 'utf-8', (err,data) => {
// //     if (err) throw err
// // console.log(data)
// })

// rl.question(`Nama?`,(nama) => {
// rl.question(`Telp?`, (notelp) =>{
//     rl.question(`Email?`, (email) =>{
//     console.log(`Terimakasih ${nama}, telfon ${notelp},email ${email}`);
//     rl.close()
// })
// })
// })

// const data = {
//     nama: 'shilla',
//     notelp: '0895371890800',
//     email: 'ratsilahzahra@gmail.com'
// };

// const rules = {
//     name: 'required',
//     // for multiple rules
//     notelp: 'required|number', // can be a piped string
//     email: ['required', 'string'] // can be an array of strings
// };

// const v = Validator.make(data, rules);

// if (v.fails()) {
//     const errors = v.getErrors();
//     console.log(errors);
// }

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const predefinedEmail = "ratsilahzahra@gmail.com";
const predefinedNotelp = "0895371890800"

function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}
async function main() {
    try {
        const nama = await askQuestion('Nama? ');

        let email;
        let isValidEmail = false;
        while (!isValidEmail) {
            email = await askQuestion('Email? ');
            if (email === predefinedEmail) {
                isValidEmail = true;
            } else {
                console.log('Email salah, input email benar');
            }
        }
let notelp;
        let isValidNotelp = false;
        while (!isValidNotelp) {
            notelp = await askQuestion('Nomor? ');
            if (notelp === predefinedNotelp) {
                isValidNotelp = true;
            } else {
                console.log('Nomor telepon salah, input nomor telpon yang benar')
            }
        }
        console.log(`Nama ${nama}, Nomor telepon ${notelp}, Email ${email}`);
    } finally {
        rl.close();
    }
}

main();

// tes