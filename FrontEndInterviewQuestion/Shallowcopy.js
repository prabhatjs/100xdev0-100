let school={
    name:"KANPUR SCHOOL",
    address:"kanpur"
}
let collage=Object.assign({},school); //its copy only values 
collage.name="CSJMU";

//2nd type of shallowcopy

let collage2={...collage};
collage2.name="UIET";

console.log(school);
console.log(collage);
console.log(collage2);

//{ name: 'KANPUR SCHOOL' }
//{ name: 'CSJMU' }

//{ name: 'KANPUR SCHOOL', address: 'kanpur' }
//{ name: 'CSJMU', address: 'kanpur' }

// { name: 'KANPUR SCHOOL', address: 'kanpur' }
// { name: 'CSJMU', address: 'kanpur' }
// { name: 'UIET', address: 'kanpur' }