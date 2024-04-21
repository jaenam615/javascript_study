const franc = require('franc');
const colors = require('colors');
const langs = require('langs');

const input = process.argv[2];

// test
const code = franc(input);
// console.log(code);
if (code === 'und') {
    console.log("Couldn't figure out which language was input!".red);
} else {
    const language = langs.where("3", code).name;
    console.log("Our best guess is: " + language.green);
}