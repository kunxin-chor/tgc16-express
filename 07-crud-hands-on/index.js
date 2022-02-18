// SETUP
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
const axios = require('axios');

const app = express();
app.set('view engine', 'hbs');
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

app.use(express.urlencoded({extended:false}));

// ROUTES


const BASE_API_URL = "https://ckx-movies-api.herokuapp.com";
app.get('/', async function(req,res){
     let response = await axios.get(BASE_API_URL + "/movies");
     res.render('index',{
         'movies': response.data
     })
})

app.get('/movies/create', async function(req,res){
    res.render('create_movie')
})

// req contains what the browser sends to the server
app.post('/movies/create', async function(req,res){
    // the payload contains the data that we want to save
    let payload = {
        'plot': req.body.plot,
        'title': req.body.title
    }
    await axios.post(BASE_API_URL + '/movie/create', payload);
    res.redirect('/')
})

// LISTEN
// start the server at port 3000
// "listen" for requests at port 3000
app.listen(3000, function(){
    console.log("Server has started")
})