

const user=[{
    name:"Prabhat",
    address:[{city:'Kanpur'},{city:'Agra'},{city:'Noida'}],
    age:19,
    contactNo:[{M1:7152535356},{M2:376464562},{M3:3655356252}]
},{
    name:"Nafar",
    address:[{city:'Delhi'},{city:'Mumbai'},{city:'Punjab'}],
    age:19,
    contactNo:[{M1:7152535356},{M2:376464562},{M3:3655356252}]
},
{
    name:"Ankit",
    address:[{city:'Haryana'},{city:'Banglore'},{city:'Pune'}],
    age:19,
    contactNo:[{M1:7152535356},{M2:376464562},{M3:3655356252}]
},
{
    name:"Shivam",
    address:[{city:'London'},{city:'Kolkata'},{city:'Shimla'}],
    age:19,
    contactNo:[{M1:7152535356},{M2:376464562},{M3:3655356252}]
}
];

function getUserName(user){
    //loop through only objects
   for(let i=0;i<user.length;i++)
   {
    console.log(user);
   }
   //for in statement loops through the properties of an Object:
   for(i in user){
    console.log(user[i]);
   }
   console.log("First Index Date->",user[1]);
   console.log(user[1]);//first Index address will print;

   //print only city of all users
   for(k in user){
    console.log(user[k].address);
   }

   //print all the contacts numbers of users
   for(const cn of user)
   {
    console.log("for of-->",cn.address);
   }

}

let data1=getUserName(user);