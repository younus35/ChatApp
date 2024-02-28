const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(loginRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>');
});

app.listen(3000);