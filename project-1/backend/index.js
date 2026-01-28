import express from "express"
import { createTodo, updateTodo } from "./types.js"
import { Todo } from "./db.js";
import cors from "cors"

const app=express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
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

app.put("/completed", async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(400).json({
            msg:"Invalid Payload",
        })
        return;
    }

    await Todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo Updated Successfully",
    })
})

app.listen(3000, () => console.log("Server running on port 3000"));