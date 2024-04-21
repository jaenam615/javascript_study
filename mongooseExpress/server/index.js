const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(()=>{
        console.log('connection established');
    })
    .catch((err)=>{
        console.log('connection failed')
        console.log(err)
    });

app.get('/products', async (req, res)=>{
    const products = await Product.find({})
    res.send('show all products!');
})

app.get('/products/:id', async (req, res)=>{
    const {id} = id.params;
    const product = await Product.findById(id);
    res.send('details page');
    console.log(product);
})

app.listen(3000, ()=>{
    console.log('server listening on port 3000')
});
