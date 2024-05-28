// function greeting(name){
//     return `hello ${name}`;
// }

// const greeting=(name)=>{
//     return `hello ${name}`;
// }

// const mesg=greeting("Prabhat");
// console.log(mesg);


//given an array ,give a new array which multiple by 2

const arr=[1,2,3,4,5,6,7,8];

let variable=arr.map(ele=>ele*2).filter(ele=>ele>10);
console.log(variable);


let newarray=[];
let newarray2=[];

let vari=arr.map(element=>newarray.push(element*2));

for(let i=0;i<arr.length;i++){
    newarray2.push(arr[i]*2);
}

console.log("this is new array",newarray,newarray2);