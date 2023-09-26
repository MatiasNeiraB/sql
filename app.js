const express = require('express')
const app = express();

app.use(require('./routes/indexRoutes'));
app.use(require('./routes/usuariosRoutes'));

app.listen(3000, ()=> console.log('Db conectada'));