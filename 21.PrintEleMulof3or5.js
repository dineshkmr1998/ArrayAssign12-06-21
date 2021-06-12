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

console.log("The Elements which are multiple of 3 or 5 in the array are ")
mul3or5()
function mul3or5(){
    for(let i=0;i<ar.length;i++)
    {
        if(ar[i]%3==0||ar[i]%5==0){
            console.log(ar[i])
        }
    }
    
}