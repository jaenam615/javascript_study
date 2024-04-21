const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static('public')) 
app.use(express.static(path.join(__dirname, 'public'))) 

//important - make a /views directory 
app.set('view engine', 'ejs');
//good practice 
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res)=>{
    console.log('got request')
    res.render('home.ejs')
})

app.get('/cats', (req, res)=>{
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats });
})

app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params; 
    const data = redditData[subreddit]; 
    if (data){
        res.render('subreddit', { ...data});
    } else {
        res.render('notfound', {subreddit})
    }
})

app.get('/random', (req, res)=>{
    // values may be sent via the second argument of render, in an object format. 
    // the receiving end may use said value via calling the key
    const randNum = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand: randNum})
    // may be sent as {num}, which would be the case when the key and the value are the same 
})

app.listen(3000, ()=>{
    console.log('listening on 3000')
})                  