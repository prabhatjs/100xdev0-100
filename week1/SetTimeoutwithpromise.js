function Time(second){
    return new Promise((resolve,reject)=>{
        const sttime=Date.now();
        while(Date.now()-sttime<second){
        }
        reject();
    });
}

Time(2000).then(()=>{
    console.log("after delay");
})
