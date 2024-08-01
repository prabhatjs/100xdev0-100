let school={
    name:"KANPUR SCHOOL"
}
let collage=school;
collage.name="CSJMU";


//in javascript when we assign one object to another object its share the refrence means both object with same memory space but data is not copy
//copy by refrence
console.log(school);// 1-{ name: 'KANPUR SCHOOL' } after change { name: 'CSJMU' }