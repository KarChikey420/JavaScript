//api.js

import express from "express";

function final_ans(n){
    let count=0;
    for (let i=0;i<=n;i++){
        count+=i;
    }
    return count;
}

const app = express();

app.get("/data",(req,res) => {
    const n=req.query.n;
    const result=final_ans(n);
    res.send(result.toString());
})

app.listen(3000)