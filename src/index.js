const express = require('express');
const app = express();
const path= require('path'); 
//settings
app.set('port',8080);
//app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//middle wares

//routes
   app.use(require ('./routes/index.js'));
//static files
app.use(express.static(path.join(__dirname,'public')));
//server listening
app.listen(app.get('port'), () => {
    console.log('Server succesfully working');
    console.log('I was missing u loli 7u7');    
    console.log('Server on port', app.get('port'))
});
