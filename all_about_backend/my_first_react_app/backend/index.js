import express from 'express';
import users from './user.js';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from Express servers!');
})

app.get('/api/users',(req,res)=>{
    res.json(users);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})