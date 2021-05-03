
// Biggie Size 
function BiggieSize(arr){
    for(var i=0;i<=arr.length;i++){
    if(arr[i]>0){
    arr[i]='big';
        }
      }
      return(arr);
      
    }
    console.log(BiggieSize([-1,3,5,-5]));

// Print Low, Return High
function PrintLowReturnHigh(arr){
        var low=arr[0];
        var high=arr[0];
        for(var i=0;i<=arr.length;i++){
        
        if(arr[i]<low){
        low=arr[i];
            }
        if(arr[i]>high){
        high=arr[i];
        }    
            
          }
          
          console.log(low);
          return (high);
          
}
console.log(PrintLowReturnHigh([-1,3,5,-5]));


// Print One, Return Another 
function printAndReturn(arr){
  var arr2=[0];
  for(var i=1;i<arr.length;i++){
  arr2=arr[i];
  console.log(arr2);
  }
  for (var i=0;i<arr.length;i++){
    if(arr[i] % 2 !==0){
      return arr[i];
    }
  }
}

var z = [2,8,1,3,5,7];
console.log(printAndReturn(z));


// Double Vision
function doubleVision(arr){
  for (var i=0;i<arr.length;i++){
    arr[i] = arr[i]*2;
  }
  return arr;
}

console.log(doubleVision([1,2,3]));



// Count Positives
function CountPositives(arr){
  var counter=0;
  for (var i=0;i<arr.length;i++){
    if(arr[i]>0){
    counter++;
    }
  }
  arr[arr.length-1]=counter;
  return arr;
}
console.log(CountPositives([-1,1,1,1]));

// Evens and Odds
function evenAndOdd(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i] % 2 !==0){
      if(arr[i+1] % 2 !==0){
        if(arr[i+2] % 2 !==0){
          console.log("That's odd!");
        }
      }
    }
    if(arr[i] % 2 == 0){
      if(arr[i+1] % 2 == 0){
        if(arr[i+2] % 2 == 0){
          console.log("Even more so!");
        }
      }
    }
  }
}

evenAndOdd([5,7,9,8,6,4]);

// Increment the Seconds 
function incrementSeconds(arr){
  for (var i=0;i<arr.length;i++){
    if(i % 2 !==0){
      arr[i] = arr[i] + 1; 
    }
   console.log(arr[i]);
  }
  return arr;
}
console.log(incrementSeconds([0,4,2,6,-1,-3]));

// Previous Lengths

function previousLengths(arr){
  for (var i=arr.length-1;i>0;i--){
	  arr[i] = arr[i-1].length;
  }
  return arr;
}

console.log(previousLengths(["hello","dojo","awesome"]));

// Add Seven
function addSeven(arr){
  var newarr=[];
    for (var i=0;i<arr.length;i++){
      newarr[i] = arr[i]+7;
    }
    return newarr;
  }
  
  console.log(addSeven([1,2,3]));

  // Reverse Array

  function reverse(arr){
    for (var i=0;i<arr.length/2;i++){
      var temp = arr[i];
      arr[i] =  arr[arr.length-1 - i]; 
      arr[arr.length-1 - i] = temp;
    }
    return arr;
  }
  
  
  console.log(reverse([2,4,6,1,3]));

// Outlook: Negative
  function allNegative(arr){
    var newArr = [];
    for (var i=0;i<arr.length;i++){
      newArr.push(-Math.abs(arr[i]));
      }
    return newArr;
  }
  
  console.log(allNegative([1,-3,5]));

// Always Hungry
  function alwaysHungry(arr){
    var cont = 0;
    for (var i=0;i<arr.length;i++){
      if (arr[i] == "food"){
        console.log("yummy");
      }
      else{
        cont++;
      }
    }
    if(cont == arr.length){
      console.log("I'm hungry");
    }
  }
  
  alwaysHungry([2,3,4,5]);
  alwaysHungry([2, "food", 1, "food"]);


// Swap Toward the Center
  function swapTowardCenter(arr){
    var temp = arr[0]; 
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
  
    return arr;
  }
  console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));

// Scale the Array

  function scaleArray(arr,num){

    for(var i=0;i<arr.length;i++){
    arr[i]=arr[i]*num;
    }
    return arr;
    }
    console.log(scaleArray([1,2,3],3));