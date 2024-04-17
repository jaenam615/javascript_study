 const express = require('express');

const app = express()
const port = 3000

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST")
//     // console.dir(req)
//     // res.send('HERE IS RESPONSE')
//     // res.send('<h1>This is my Webpage!</h1>')
//     res.send({ color: 'red' }) //responses as JSON
// })

// /cats => 'meow'
// /dogs => 'woof'
// / => 'welcome!'
app.get('/', (req, res) => {
    res.send('welcome!')
})

app.post('/cats', (req, res) => {
    res.send('post request to cats!')
})

app.get('/cats', (req, res) => {
    console.log('cat request')
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    console.log('dog request')
    res.send('woof')
})

// '*' is universal 
app.get('*', (req, res) => {
    res.send('this path does not exist')
})

app.listen(port, () => {
    console.log("LISTENING ON PORT 3000")
})

