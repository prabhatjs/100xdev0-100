/*
*   Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, 
*   using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to then
    
*/

//ek promise banaya jo ki 1000 milisecond baad khtam hoga
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('reject');
    },1000);
   
})
p.then((val)=>{
    console.log(val);
}).catch(()=>{
    console.log("reject")
});