function findLargestElement(numbers) {
    let max=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>max)
        {
            max=numbers[i];
    }
    
}
        return max;
}
let arr=[-2,-19,-10,-5,-9,10];
let a=findLargestElement([3, 7, 2, 9, 1]);
let b=findLargestElement([15, 27, 8, 12]);
let c=findLargestElement([-5, -10, -2, -8]);
let d=findLargestElement([3.5, 7.2, 2.1, 9.8, 1.9]);
let num=findLargestElement(arr);
console.log(num,a,b,c,d);
