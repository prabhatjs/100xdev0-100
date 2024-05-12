//lexical scope

function init(){
    let myname='Prabhat'
  
  //  console.log(lastname);
  function lastnameDisplay(){
    let lastname='Yadav'
  }
    function displayname(){
        console.log(myname);
        console.log(lastname);//lastname is not defined
    }
    displayname();
   lastnameDisplay();
}
//console.log(myname); //myname is not defined, two child function are not share between them --but grand parent function share with evey child function 
init();


/*clouser*/

/*Q1. What is Javascript according to you? 
Q2. What is Lexical Scope? 
Q3. What is Callback Hell and How you can handle it? 
Q4. What are proto? 
Q5. What is Middleware and name some 3rd party middlewares? 
Q6. What are ORMs? 
Q7. How to connect postgres with express application*/