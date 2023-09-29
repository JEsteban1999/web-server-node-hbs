const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express y hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// Express HBS Engine
app.get('/', (req, res) => {
    //res.send('Hola mundo!')
    
    res.render('home', {
        nombre: "Juan Esteban"
    });
});
app.get('/about', (req, res) => {
    //res.send('Hola mundo!')
    
    res.render('about');
});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});