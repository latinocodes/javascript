const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require("bcryptjs");
const users = require('./users');
const exphbs = require("express-handlebars");

const app = express();

const static = express.static(__dirname + "/public");

// MIDDLEWARES
app.use("/public", static);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(session({
    name: 'AuthCookie',
    secret: 'SuperSecreteStuff',
    resave: false,
    saveUninitialized: false
  }));

// Custom Middleware
const isAuthenticated = (req, res, next) =>{    
    if(!req.session.user){ return res.status(403).render('403'); }
    else{ next(); }
};

const loggerMiddleware = (req, res, next) => {
  let date = new Date().toUTCString();
  console.log(`[${date}]: ${req.method} ${req.originalUrl}`)
  next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  if(req.session.user){ return res.redirect('/private'); }
  else{ return res.render('login'); }
});

app.post('/login', async (req, res) => {

  const { username, password } = req.body;
  
  // if username and password contains values
  if(username && password) {
    const user = users.find(user => user.username === username);
    let match;
    
    console.log(user)
    // Check password
    if(user){
      try{ match =  await bcrypt.compare(password, user.hashedPassword); }
      catch(e){ console.log(e); }
  
      if(match){
        res.cookie("AuthCookie");
        req.session.user = user;
        res.redirect('/private');
      }
      else{
        // if credentials are invalid
        res.status(401).render('login', {error_message: "must enter a valid password",  hasErrors: true})
      }
    }
    else{
      // if user was not found
      res.status(401).render('login', {error_message: "that Username does not exist",  hasErrors: true})
    }
  }
  else{
    // if no credentials were provided
    res.status(401).render('login', {error_message: "Credentials were not provided",  hasErrors: true})
  }
});

app.get('/private', isAuthenticated, (req, res) => {
  res.send(`
    <h1>you are in private</h1>
    <p>ID: ${req.session.user._id}</p>
    <p>Username: ${req.session.user.username}</p>
    <p>First Name: ${req.session.user.firstName}</p>
    <p>Last Name: ${req.session.user.lastName}</p>
    <p>Profession: ${req.session.user.Profession}</p>
    <p>Bio: ${req.session.user.Bio}</p>
    <br>
        <a href="/logout">Logout</a>`);
});

app.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie("AuthCookie");
    res.send(`<h4>you have been logout.</h4> you can restart back <a href="/"> Home Here</a>`);
});

app.get('*', isAuthenticated, (req, res) => {
    res.redirect('/')
})

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});