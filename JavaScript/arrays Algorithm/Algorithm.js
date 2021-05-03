// part 1
var testarr=[6,3,5,1,2,4];
var sum=0;
for(var i=0;i<testarr.length;i++)
{
sum=sum+testarr[i];
console.log("Num "+testarr[i],'sum '+sum)
}


// solution
// "Num 6", "sum 6"
// "Num 3", "sum 9"
// "Num 5", "sum 14"
// "Num 1", "sum 15"
// "Num 2", "sum 17"
// "Num 4", "sum 21"





// part 2
var testarr=[6,3,5,1,2,4];
for(var i=0;i<testarr.length;i++)
{
	testarr[i]*=i;
}
console.log(testarr)

// solution
// [0, 3, 10, 3, 8, 20]