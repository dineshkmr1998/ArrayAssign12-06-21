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
console.log("The Maximum Element in an array")
var res=maxele()
console.log(res)
function maxele()
{let i=0
    var max=0
    for(let i=0;i<ar.length;i++){
        if(max<ar[i])
         max=ar[i]
    }
    return max
}