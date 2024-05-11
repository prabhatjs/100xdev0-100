const mongoose=require('mongoose');

 const connectiondb=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/pincodedata');
    console.log("connect with db")
}

module.exports=connectiondb;