const arrayofUrls=[
'https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2',
'https://jsonplaceholder.typicode.com/todos/3'];

async function multiplecallApi(url){
    const data=await fetch(url);
    const res=await data.json();
    return res;
}

async function executeall(){
       const response=await Promise.all(
        arrayofUrls.map((url)=>multiplecallApi(url))

       ) 
       console.log(response);

}
executeall();