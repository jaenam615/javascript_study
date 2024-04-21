const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12); //Generate Salt
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}


const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if (result) {
        console.log('logged in successfully');
    } else {
        console.log('failed')
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$pjJSKxDu9biZyKbKiIDYsu2.n1B6qe8aJHwlB2hlzX6Kdo0IwT4HO')