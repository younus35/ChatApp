const express = require('express');

const router = express.Router();

const path = require('path');

const fs = require('fs')

const ejs = require('ejs');

router.get("/",(req, res, next)=>{
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            console.log(err);
            data = 'no chats'
        }
        const html = `<html lang="en">
        <body>
            <p>${data}</p>
            <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username"><br>
                <button type="submit">send</button>
            </form>
        </body>
        </html>`
        res.send(html);
    });
});

router.post("/", (req, res, next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`, {flag: 'a'}, (err) => 
         err ? console.log(err) : res.redirect("/")
    );
});

module.exports = router;