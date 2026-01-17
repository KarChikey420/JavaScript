//Authentication middleware

import jwt from 'jsonwebtoken';
import express from 'express';

const express=require('express');
const jwt=require('jsonwebtoken');
const jwtPassword='12345';

const app=express();

const AllUsers=[
    {id:1,username:'admin',password:'admin123'},
    {id:2,username:'user1',password:'user123'},
]

function UserExists(username,password){

}

app.post('/signin',function(req,res){
    const username=req.query.username;
    const password=req.query.password;
    if(!UserExists(username,password)){
        return res.status(403).json({
            msg:'Invalid Credentials',
        });
    }
    var token=jwt.sign({username:username},"shhhh");
    return res.json({
        token:token,
    });
});