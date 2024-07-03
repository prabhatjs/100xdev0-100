const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/todosdb");

const todosSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todosdb',todosSchema);
module.exports={
    todo
}