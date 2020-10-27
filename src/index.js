//cagando express
const express = require('express');
//servidor
const app = express();
//Modulo path para trabajar con directorios sin importar si es windows o linux
const path = require('path');
//cargar la app en el puerto dado(primera opcion)
/*app.listen(4000, () => {
    console.log('server on port 3000', 4000);
});*/

//segunda opcion de cargar el puerto
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});