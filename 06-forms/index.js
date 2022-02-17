// SETUP //////////////////
const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');

// create the express application
const app = express();
app.set('view engine', 'hbs'); // the second argument hbs as string, not the object

waxOn.on(hbs.handlebars);  // the first argument is the hbs object, not string
waxOn.setLayoutPath('./views/layouts'); 

app.use(express.static('public')); // set the static folder to public

// ENABLE FORMS
app.use(express.urlencoded({extended:false}));


// ROUTES /////////////////

// The route below is HTTP GET /add-food
app.get('/add-food', function(req,res){
    res.render('add-food')
})

// intercept the data of the form
// that is render at GET /add-food
app.post('/add-food', function(req,res){
    console.log(req.body);
    res.send("Form recieved");
})

// LISTEN
app.listen(3000, function(){
    console.log("Server has started")
})

