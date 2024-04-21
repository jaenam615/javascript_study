const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('tiny'));


app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!")
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry, you need a password!')
}

// app.use((req, res, next) => {
//     console.log("this is my first middleware!")
//     next();
// })
// app.use((req, res, next) => {
//     console.log("this is my second middleware!")
//     next();
// })


app.get('/', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send("Home!")
})

app.get('/dogs', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    console.log("woof woof")
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send("My secret is: I don't want to eat my veggies");
})

app.use((req, res) => {
    res.status(404);
    res.send("404 NOT FOUND");
})

app.listen(3000, () => {
    console.log('Listening')
})

