const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/login',(req, res, next)=>{
     console.log('login page');
     res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});
router.post('/login',(req, res, next)=>{
     console.log(req.body.username);
     res.status(302).redirect('/');
});

module.exports = router;