const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));


app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

/*Motor de plantillas ejs*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.listen(PORT, () => console.log('Servidor corriendo en el puerto 4000'));

