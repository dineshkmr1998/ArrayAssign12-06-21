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
console.log("The Sum of Array Elements at Odd Index")
console.log(res)
function add(){
    var sum=0    
    for(let i=1;i<ar.length;i=i+2)
    {
        sum=sum+ar[i] 
    }
    return sum
}
