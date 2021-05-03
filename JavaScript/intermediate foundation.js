// 1
function sigma(num){
    var sum =0;
    for(var i=0;i<= num;i++){
        sum+=i;

    }
    return sum;
}
console.log(sigma(5));


// 2
function factorial(num){
    var mult=1;
    for(var i=1;i<=num;i++){
        mult*=i;   
     }
     return mult;
}
console.log(factorial(5));

// 3

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
  
console.log(fib(6));

// 4

function secondToLast(arr){
    
    if(arr.length<2){
        return null;
    }
    console.log(arr[arr.length-2])

}

secondToLast([42, true,"liam",7])

// 5
function nthToLast(arr,y){
    if(arr.length<2 && y>0){
        return 0;
    }

    return arr[arr.length-y];
}
console.log(nthToLast([5,2,3,6,4,9,7],3));

// 6
function secondLargest(arr){
    if(arr.length<2) {
        return;
    }
    var max= arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
        var secMax=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]<max && arr[i]>secMax){
                secMax=arr[i];

            }
        }
        return secMax;
    
}
console.log(secondLargest([42,1,4,3.14,7]));

// 7
function DoubleTrouble(arr){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
    newarr.push(arr[i],arr[i]);
    }
    return newarr
}
console.log(DoubleTrouble([4, "Ulysses", 42, false]));