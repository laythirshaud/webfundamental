// Predict 1:

function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);


// solution :
// "Hello"


Predict 2:

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

// solution:
// "Summing Numbers!"
// "num1 is: 3"
// "num2 is: 5"
// "Summing Numbers!"
// "num1 is: 4"
// "num2 is: 7"
// 8
// 11


Predict 3:
function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

// solution:
// NO output because the function not have a return