// 3.Printing All elements at Odd index in an array
var size=Number(prompt("Enter the size of an array"))
var ar=new Array(size)
for(let i=0;i<size;i++){
    ar[i]=prompt("Enter the elements of array")
} 
console.log("Printing the elements of an Array")
for(let i=0;i<ar.length;i++){
    console.log(ar[i])
}
console.log("Printing the elements at Odd Index of an Array")
for(let i=1;i<ar.length;i=i+2){
    console.log(ar[i])
}