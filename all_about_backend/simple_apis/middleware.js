import express from 'express';

const app = express();

function authMiddleware(req,res,next){
    const username = req.query.username;
    const password = req.query.password;
    if (username !='admin' || password !='admin123'){
        res.status(403).json({
            msg:'Invailid Credentials',
        });
    }
    else{
        next();
    }
};

function kidneyIDMiddleware(req,res,next){
    const kidney_id = req.query.kidney_id;
    if (kidney_id!=1 && kidney_id!=2){
        res.status(404).json({
           msg:'Kidney ID not found',
        });
    }else{
        next();
    }
}

app.get('/data',authMiddleware,kidneyIDMiddleware,function(req,res){
    res.send("Your kidney health is good.");
});

