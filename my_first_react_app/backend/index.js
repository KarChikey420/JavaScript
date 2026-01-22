import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from Express servers!');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})