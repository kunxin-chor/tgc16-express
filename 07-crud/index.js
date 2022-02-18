// SETUP
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
const axios = require('axios');

// create the app
const app = express();

// set the template engine to hbs
app.set('view engine', 'hbs'); // 2nd arg is string

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// static folder
app.use(express.static('public')); // static files goes into /public

// enable forms processing
app.use(express.urlencoded({extended:false}));

const BASE_API_URL = "https://ckx-restful-api.herokuapp.com";

// ROUTES
app.get('/', async function(req,res){
    // all the routes have to send back something
    let response = await axios.get(BASE_API_URL + '/sightings');
    res.render('index',{
        'sightings': response.data
    })
})

// BEGIN SERVER (aka LISTEN)
app.listen(3000, function(){
    console.log("server begins");
})
