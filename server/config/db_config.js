const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/admin');                                  
const db = mongoose.connection;

db.on('error',console.error.bind(console, '# Mongo DB: connection error:'));

db.once('open',function(){
     console.log('Mongoose connected');
})

//Session storage config
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({mongooseConnection: db});
module.exports = sessionStore;
