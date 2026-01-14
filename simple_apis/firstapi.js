import express from 'express';

const app=express();

app.get('/data',function(req,res){

    const kidney_id=req.query.kidney_id;
    const username=req.query.username;
    const password=req.query.password;

    if (username !='admin' || password !='admin123'){
        res.status(403).json({
            msg:'Invailid Credentials',
        });
        return;
    }

    if (kidney_id!=1 && kidney_id!=2){
        res.status(404).json({
            msg:'Kidney ID not found',
        });
        return;
    }

    res.send("Your kidney health is good.");
});

app.listen(3001, () => console.log("Server running on port 3001"));