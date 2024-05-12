/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
* During this time the thread should not be able to do anything else.
* the function should return a promise just like before
*/


function hult(){
    let a=0;
    for(let i=0;i<10000000;i++){
        a=a+1;
    }
    sleep(2000);
}
function sleep(milliseconds) {
console.log("100");
}
setTimeout(hult,1000)

function sleep(milis) {
    return new Promise(resolve => {
      
      setTimeout(resolve, 10000);

      console.log("wej")
    });
  }
  


module.exports = sleep;
