import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
const session = require('express-session');
const sessionStore = require('./config/db_config');
// =================== middleware ===================
import {webpackSetting, webpackLoading } from './webpack_compiler';
app.use(webpackSetting);
app.use(webpackLoading);
app.use(express.static(path.join(__dirname,'../public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const sessionOptions = {
     secret : 'super_secret_session',
     resave: false,
     // true for save session
     saveUninitialized: true,
     cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
     store: sessionStore
}
app.use(session(sessionOptions));
// +++++++++++++++++++++++++ Routes options +++++++++++++++++++=
import users from './routes/user';
app.use('/api/users',users);
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../public/', 'index.html'))
})

app.get('/', (req,res) => {
     res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.listen(3000, (err) => {
     if(err) throw err;
     console.log(__dirname,'Express server listening on 3000');
});
