import  express from "express"
import { createTodo,upadteTodo} from "./types.js"
import { Todo } from "./db.js";

const express=require("express");
const app=express();

app.use(express.json());

app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.sucess){
        res.status(400).json({
            msg:"Invalid Payload",
        })
        return;
    }
   await Todo.create({
      title:createPayload.title,
      description:createPayload.description,
      completed:false,
   })
   res.json({
    msg:"Todo Created Successfully",
   })
})

app.get("/todos",async function(req,res){
    const todos=await Todo.find();
    console.log(todos);

    res.json({
        msg:"Todos fetched successfully",
    })

})

app.put("/completed",function(req,res){
    const upadtepayload=req.body;
    const parsePayload=upadteTodo.safeParse(upadtepayload);
    if(!parsePayload.sucess){
        res.status(400).json({
            msg:"Invalid Payload",
        })
    }

    Todo.create({

    })
})