const fs = require('fs');

//async version
// fs.mkdir('dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK")
//     if (err) throw err;
// });
//sync version
const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/styles.css`)
    fs.writeFileSync(`${folderName}/app.js`)
} catch (e) {
    console.log("Error!");
    console.log(e);
}