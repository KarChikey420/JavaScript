//Authentication middleware

import jwt from 'jsonwebtoken';
import express from 'express';

const jwtPassword='12345';

const app=express();
app.use(express.json());

const AllUsers=[
    {id:1,username:'admin',password:'admin123'},
    {id:2,username:'user1',password:'user123'},
]

function UserExists(username,password){
     let UserExists=false
     for(let i=0;i<AllUsers.length;i++){
        if (AllUsers[i].username==username && AllUsers[i].password==password){
            UserExists=true;
        }
     }
     return UserExists;
}

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!UserExists(username,password)){
        return res.status(403).json({
            msg:'Invalid Credentials',
        });
    }
    var token=jwt.sign({username:username},jwtPassword);
    return res.json({
        token:token,
    });
});

app.get('/userinfo',function(req,res){
    const token=req.headers['authorization'];
    try{
        const decoded=jwt.verify(token,jwtPassword);
        const username=decoded.username;
        return res.json({
            username:username,
        });
    }catch(err){
        return res.status(401).json({
            msg:'Invalid Token',
        });
    }
});

app.listen(3003, () => console.log("Server running on port 3003"));