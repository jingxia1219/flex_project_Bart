const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require('./routes/api/events');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport')(passport);

mongoose 
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));



app.get("/", (req, res) => res.send(" Bart App for Tourists"));
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`)); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/events", events);
app.use(passport.initialize());