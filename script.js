//Map
//syntax  arrayname.map(we need to pass a function) // HOF
//example 1:-
const arr = [1,2,3,4,5]  // [2,4,6,8,10]

function double(ele){
    return ele*2
}
const output = arr.map(double)
console.log(output);
//example 1:-
const arr = [1,2,3,4,5];
const output = arr.map(function(x){
    return x*2;
})
console.log(output);
//example 1:-
const arr = [1,2,3,4,5];
const output = arr.map((ele)=>{
    return ele*2;
})
//when there is only one line in function which return something
//example 1 ;-
const arr = [1,2,3,4,5];
const output = arr.map((x)=>x*2)
console.log(output)
//Filter
const arr = [4,3,2,1,5];
//odd
function odd(ele){
    return ele%2 !=0;
}
const output = arr.filter(odd);
console.log(output);
//even
const arr = [4,3,2,1,5];
const output = arr.filter(function (ele){
    return ele%2==0;
});
console.log(output);
///
const arr = [4,3,2,1,5];
const output = arr.filter((ele)=> ele%2==0);
console.log(output);
//greater than 2
const arr = [4,3,2,1,5];
const output = arr.filter((ele)=> ele>2);
console.log(output);
//Reduce:-
//example sum of the array without using reduce  //124 = 7
const arr = [1,2,3,4,5];
let sum =0;
    for(let i=0;i<arr.length;i++){
      sum = sum + arr[i]; 
    }

console.log(sum);
using reduce function
arrayname.reduce(function(acc,curr){

},0)
//acc =>accumulator /max/sum
//current value 
const arr = [1,2,3,4,5];
const output = arr.reduce(function(acc,curr){
  acc= acc+curr;
  return acc;
},0)
console.log(output);
//without reduce
const arr = [1,2,3,4,5,6,7,8,9]
let max=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);
//using reduce
const arr = [9,2,3,5,6,7,8]
var output= arr.reduce(function(max,ele){
if(ele>max){
    max = ele;
}
return max;
},0)
console.log(output)
//lets take example like data from API
const users = [
    {firstName: "Kamal",lastName: "Hasan",age:60},
    {firstName: "Donald",lastName: "Trump",age:60},
    {firstName: "Rajini",lastName: "Kanth",age:50},
    {firstName: "Ajith",lastName: "Kumar",age:40},
    ];
    
    //List full names
    var output = users.map((x)=>x.name.common +" "+ x.lastName)
    console.log(output);
//finding ages example {60:2 , 70:1 , 40:1} // {}
var output = users.reduce(function(acc,curr){
//initially check wthether age is present or not 
if(acc[curr.age]){
   acc[curr.age]= ++acc[curr.age];  //{60:2,}
}
else{
   acc[curr.age]=1   //{60:1,70:1,40:1}
}
return acc;
},{})
console.log(output);

//Find out the firstname of all people who's age is less than 60
var output = users.filter((x)=>x.age<60).map((x)=>x.firstName);
console.log(output);