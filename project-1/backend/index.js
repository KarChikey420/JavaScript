import  express from "express"
import { createTodo,upadteTodo} from "./types.js"

const express=require("express");
const app=express();

app.use(express.json());

app.post("/todo",function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.sucess){
        res.status(400).json({
            msg:"Invalid Payload",
        })
        return;
    }
})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const upadtepayload=req.body;
    const parsePayload=upadteTodo.safeParse(upadtepayload);
    if(!parsePayload.sucess){
        res.status(400).json({
            msg:"Invalid Payload",
        })
    }
})