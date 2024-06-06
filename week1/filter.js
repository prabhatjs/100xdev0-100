const arr=[2,4,5,67,89,9,10];

const filters=arr.filter(num=>num>10);
console.log(filters);





function saymyname(name){
    let mname='prabhat';
    console.log(mname);
    setTimeout(()=>{
        name();
    },2000);
}

function displayname(){
    console.log("hello");
}

saymyname(displayname);