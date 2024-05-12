const fs=require("fs");
//read file in async function 
fs.readFile('hello.txt',"utf-8",function(eror,data){
    console.log(data);
})

console.log("first")