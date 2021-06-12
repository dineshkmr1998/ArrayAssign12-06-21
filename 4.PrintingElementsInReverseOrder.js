// 3.Printing All elements in an array in Reverse Order
var size=Number(prompt("Enter the size of an array"))
var ar=new Array(size)
for(let i=0;i<size;i++){
    ar[i]=prompt("Enter the elements of array")
} 
console.log("Printing the elements of an Array")
for(let i=0;i<ar.length;i++){
    console.log(ar[i])
}
console.log("Printing the elements of an Array in Reverse Order")
for(let i=ar.length-1;i>=0;i--){
    console.log(ar[i])
}