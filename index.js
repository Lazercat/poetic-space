/*********************************
 *   POETIC.SPACE API
 *   ========================
 *   owned and distributed by: 
 *   Jesse Lewis, Stephanie White
 *********************************/

 // Require Dependencies
 const express = require('express');
 const bodyParser = require('body-parser');
//  const cookieParser = require('cookie-parser');
//  const expressSession  = require('express-session');
//  const passport = require('passport');
//  const facebook = require('passport-facebook');
 require('dotenv').config();


// Configure App
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// App Routes
const appRoutes  = require('./routes'); //link up routes file

// Basic Page Routing
app.get('/', function(req,res){
	res.render('index');
});

//enable views with ejs engine
app.set('views', './views');
app.set('view engine', 'ejs');

//enable bodyparser for html or forms responses
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Use public directory to serve static files
app.use(express.static('public'));


// Run Web Server
app.listen(port,()=>{
	console.log(`Server listening on port ${port}.`);
});