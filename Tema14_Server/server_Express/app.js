import express from "express";

const users=[
    {id: 1, name: "name1", rol: "admin"},
    {id: 2, name: "name2", rol: "user"},
    {id: 3, name: "name3", rol: "user"},
]

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = 8080;
app.listen(PORT, ()=>{console.log(`Server listening on http://localhost:${PORT}`)})

app.get("/",(req, res)=>{
    res.send("<h1>Hello World</h1>");
})

app.get("/datos",(req, res)=>{
    res.send(users);
})

app.get("/datos/:id",(req, res)=>{
    let id=req.params.id;
    let user=users.find(item=>item.id==id)
    if(user){
        return res.status(200).send(user);
    }
    res.status(404).send("User not found");
})

app.get("/data",(req, res)=>{
    const {id, rol}=req.query;
    // res.send(rol)
    if(id){
        let user=users.find(item=>item.id==id)
        if(user){
            return res.status(200).send(user);
        }
        res.status(404).send("User not found");
    }else if(rol){
        let filtrados=users.filter(item=>item.rol==rol)
        return res.status(200).send(filtrados);    
    }
})

app.post("/datos",(req,res)=>{
    let user=req.body;
    if(!user.name || !user.rol || !user.id){
        return res.status(400).send("invalid data")
    }else{
        users.push(user)
        res.send({"status":"OK", "message":"User created "})
    }
})