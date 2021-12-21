const express = require('express');
const { sendFile } = require('express/lib/response');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000

// !important! 
// you need to install the following libraries |express|ejs|[dotenv > if required]
// or run this command >> npm i express ejs dotenv 

//app.set('view engine', 'engine')


app.use(express.static('views'));
app.use('/css', express.static(__dirname+'views/css'));
app.use('/js', express.static(__dirname+'views/js'));

app.get('/', (req, res) => {

    res.send('hello from simple server :)')

});

app.get('/laboratorio', (req, res) => {

    console.log(path.join(__dirname, '../views/index.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/index.html'));

});


app.listen(port, () => console.log('> Server is up and running on port : ' + port));