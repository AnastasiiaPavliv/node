const express=require('express');

const app=express();

const users=[
    {
        name: 'Oleh',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 22,
        gender: 'female'
    },
    {
        name: 'Anya',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Ielizavetta',
        age: 35,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 70,
        gender: 'mixed'
    }
];

 app.get('/users', (req, res)=>{
    res.json(users);
})

 app.get('/users/:userId', (req, res)=>{
    const {userId}=req.params;
    console.log((userId))
})

app.get('/welcome',(req, res)=>{
    res.send('WELCOME');
});
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server up on PORT ${PORT}`)
})