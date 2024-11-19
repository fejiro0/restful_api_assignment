const express = require('express');
const app = express();
const PORT = 5000;
const fs = require("fs");
app.get('/users',(req,res)=>{
    fs.readFile("users.json", 'utf8', function (err, data) {
        if(err){
            return res.status(500).send("there is error")
        }
        res.end( data );
    });
})
app.get('/users/:id',(req,res)=>{
    fs.readFile("users.json", 'utf8', function (err, data){
        if(err){
            return res.status(500).send("there is error")
        }
        const users = JSON.parse(data);
        const user = users["user"+req.params.id];
        if(!user){
            return res.status(404).send("User is not part of the list");
        }
        res.end(JSON.stringify(user));
    })
    })

    app.get('/users/profession/:profession',(req,res)=>{
        fs.readFile("users.json", 'utf8', function (err, data){
            if (err) {
                return res.status(500).send("Error reading users file.");
            }
            const users = JSON.parse(data);
            const profession = req.params.profession;
            const getProfession = Object.values(users).filter(user => user.profession === profession);
            if (getProfession.length===0){
                return res.status(404).send("there is nobody with such profession in our list")
            }
            res.end(JSON.stringify(getProfession));
        })
        })

        app.get('/users/name/:name',(req,res)=>{
            fs.readFile("users.json", 'utf8', function (err, data){
                if (err) {
                    return res.status(500).send("Error reading users file.");
                }
                const users = JSON.parse(data);
                const name = req.params.name;
                const getname = Object.values(users).filter(user => user.name === name);
                if (getname.length===0){
                    return res.status(404).send("there is nobody with such profession in our list")
                }
                res.end(JSON.stringify(getname));
            })
            })
        
        

app.listen(PORT, ()=> {
    console.log('Server running on http://localhost:${PORT}');

});