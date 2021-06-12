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
console.log("The Minimum Element in an array")
var res=minele()
console.log(res)
function minele()
{let i=0
    var min=ar[i]
    for(let i=0;i<ar.length;i++){
        if(min>ar[i])
         min=ar[i]
    }
    return min
}