// Get 1 to 255

function get() {    
    for(var i=1; i<256; i++) {
    
    console.log(i);
    }
}
get();





// Get even 1000
function get() {
    sum=0;    
    for(var i=1; i<=1000; i++) {
    if(i%2==0){
    console.log(i);
    }
    }
}
get();

// Sum odd 5000
function sumodd(){
    var sum=0;
    for(i=0;i<=5000;i++){
    if(i%2!=0){
    sum=sum+i;
    
    }
    
    }
    console.log(sum);
}
    sumodd();

// Iterate an array
    function iterate(){
        var arr=[-5,2,5,12]
        var sum=0;
        for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
        }
        
        console.log(sum);
 }
        iterate();

// Find max
function max(){
            var arr=[-3,3,5,7,9,50,-8]
            var max=arr[0];
            for(i=1;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i];
            }
            }
            
            console.log(max);
}
            max();


// Find average

function Findaverage(){
    var arr=[1,3,5,7,20];
    var av=0;
    sum=0;
    for(i=1;i<arr.length;i++){
    sum=sum+arr[i];
    av=sum/arr.length;
    }
    
    
    console.log(av);
}
    Findaverage();

// Array odd
function Arrayodd(){
    var arr=[];
    
    for(var i=1;i<50;i+=2){
    arr.push(i);
    
    }
    return arr;
}
    console.log(Arrayodd());

// Greater than Y
function GreaterthanY(){
        var arr=[1,3,5,7];
        var y=3;
        var count=0;
        for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
        count++;
            }
        
        }
        return count;
}
        console.log(GreaterthanY());

// Squares
function Squares(){
    var arr=[1,5,10,-2];
    newarr=[];
    for(var i=0;i<arr.length;i++){
      newarr[i]=arr[i]*arr[i];
      
    }
    return newarr;
}
    console.log(Squares());
    

// Negatives
function Negatives(arr){
        
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
          newarr[i]=arr[i]*0;
          
        }
        else{
          newarr[i]=arr[i]
        }
          
    }
    return newarr;
}

console.log(Negatives([1,5,10,-2,-8]));


// Max/Min/Avg

function MaxMinAvg(arr){

var max = arr[0]
var min = arr[0]
var sum = arr[0]

   for (var i = 1; i < arr.length; i++){

    if (arr[i] > max){
    max = arr[i]
    }
    if (arr[i] < min){
    min = arr[i];
    }
    sum = sum + arr[i];
    var avg = sum / arr.length;
    var arr2 = [max, min, avg];
   }
    return arr2;
}
    
 console.log(MaxMinAvg([1,5,10,-2]))

//  Swap Values
function Swap(arr){

    var temp;
    temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    console.log(arr)
}
    Swap([1,5,10,-2]);



// Number to String
function NumbertoString(arr){

    for(var i=0;i<=arr.length;i++){
        if(arr[i]<0){
        arr[i]='dojo';
        }
        
    }
        
    return arr;
}
        console.log(NumbertoString([1,-5,10,-2]));