var size=Number(prompt("Enter the size of the array"))
var ar = new Array(size)
getElements()
function getElements(){
    for(let i=0;i<size;i++){
        ar[i]=Number(prompt("Enter the elements of the array"))
    }
}
console.log("Printing the elements of an Array")
for(let i=0;i<ar.length;i++){
    console.log(ar[i])
}
var res=add()
console.log("The Sum of Array elements are")
console.log(res)
var avg=average()
console.log("The average of Array elements are "+avg)
function add(){
    var sum=0
    for(let i=0;i<ar.length;i++){
        sum=sum+ar[i]     
    }
    return sum
}
function average(){
    var avg=0;
    avg=res/ar.length
    return avg
}
