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
var res=mul()
console.log("The Product of Numbers at Even Index in the Array")
console.log(res)
function mul(){
    var prod=1
    for(let i=0;i<ar.length;i=i+2)
    {
        prod=prod*ar[i] 
        
    }
    return prod
}