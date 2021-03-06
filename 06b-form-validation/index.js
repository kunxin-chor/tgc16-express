const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');

const app = express();
app.set('view engine', 'hbs');

waxOn.on(hbs.handlebars);
waxOn.setLayoutPath('./views/layouts');

// enable forms
app.use(express.urlencoded({
    extended:false
}))

app.get('/', function(req,res){
    res.send("It's alive!")
})

app.get('/login', function(req,res){
    res.render('login')
})

app.post('/login', function(req,res){
    // valdiation rules:
    // 1. email must not be empty and contains at least one @
    // 2. password must not be empty and contains at three characters
    let email = req.body.email;
    let password = req.body.password;

    let hasError = false;

    // if the email is null, undefined or empty string, then we report the error
    if (!email) {
        hasError = true;
    } 

    // make sure email is not undefined or empty string
    // then make sure it has the @ character
    if ( email && !email.includes('@')) {
        hasError = true;
    }

    // make sure the password is not undefiend or empty string first,
    // then make it has three at least three characters
    if (password && password.length < 3) {
        hasError = true;
    }

    if (hasError) {
        res.sendStatus(406)
    } else {
        res.send("Success")
    }
    
    
})

app.listen(3000, function(){
    console.log("Server has started");
})