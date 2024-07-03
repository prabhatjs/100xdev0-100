const express=require('express')
const{createTodos,updateTodo}=require('./zod_type_checker/types');
const {todo} = require('./db/db');
const cors=require('cors');
const app=express();
app.use(cors({}));
app.use(express.json());


app.get("/todos",async (req,res)=>{
        const todos=await todo.find({});
        res.json({
            todos
        })
});
app.post("/todo",async (req,res)=>{
        const createPayload=req.body;
        const parsePayload=createTodos.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
                mesg:'You send wrong Inputs'
            })
            return;

        }
      await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
       })
        res.json({
            mesg:"Todo created"
        })
})
app.delete("/todos/:id",(req,res)=>{

})
app.put("/todos/:id",async (req,res)=>{
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            mesg:'You send The wrong input'
        })
        return
    }
        await todo.update(
            {
                _id:req.body.id
        },{
            completed:true
        }
    )
    res.json({
        mesg:"Todo marked as completed"
    })
})



app.listen(8080,()=>{
    console.log("server runing");
})