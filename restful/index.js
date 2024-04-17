const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4} = require('uuid');
uuidv4();
const methodOverride = require('method-override');

//app.use = running some function on any method of request
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id:uuidv4(),
        username: 'James',
        comment: 'I hate you!'
    },
    {
        id: uuidv4(),
        username: 'skyler',
        comment: 'shut up plz!'
    },
    {
        id: uuidv4(),
        username: 'Manny',
        comment: 'my lunch was kongbool'
    }
]

app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req,res)=>{
    res.render('comments/new')
})

app.post('/comments', (req, res)=>{
    const {username, comment} = req.body;
    const id = uuidv4();
    comments.push({username, comment, id});
    // res.send("it worked!")
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res)=>{
    const{id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res)=>{
    const{ id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res)=>{
    const{id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c=> c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})


app.delete('/comments/:id', (req, res)=>{
    const {id} = req.params;
    // const foundComment = comments.find(c=> c.id ===id);
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000, ()=>{
    console.log('on port 3000')
})

// setting up a resource: 
// /comments
// GET /comments - list all comments 
// POST /comments - create new comment 
// GET /comments/:id - get one comment (using ID)
// PATCH /comments/:id - update one comment 
// DELETE /comments/:id - destroy one comment 
