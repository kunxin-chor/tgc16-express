const express = require('express');
const app = express();
const hbs = require('hbs');
const waxOn = require('wax-on');

app.set('view engine', 'hbs');

// setup wax-on
waxOn.on(hbs.handlebars);

// set the layout directory
waxOn.setLayoutPath('./views/layouts')

// register some handlebars helpers
// first arg is for registerHelper is how we write in the hbs file
// second arg is a function
hbs.registerHelper('ifEquals', function(arg1, arg2, options){
    if (arg1 == arg2) {
        return options.fn(this);  // indicate a true result
    } else {
        return options.inverse(this); // false result
    }
})

hbs.registerHelper('ifEqualsEx', function(arg1, arg2, options){
    return(arg1 == arg2) ? options.fn(this) : options.inverse(this); 
})

// ROUTES
app.get('/', function(req,res){
    res.render('index')
})

app.get('/about-us', function(req,res){
    res.render('about-us')
});

app.get('/fruits', function(req,res){
    res.render('fruits.hbs', {
        'fruits':['apples', 'bananas', 'cherries', 'durians'],
        'likesFruit': true,
        'age': 33
    })
})

app.listen(3000, function(){
    console.log("Server has started");
})