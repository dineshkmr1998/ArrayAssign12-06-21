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

console.log("The Sum of Elements which are multiple of 3 or 5 in the array are ")
var res=summul3or5()
console.log(res)
function summul3or5(){
    var sum =0
    for(let i=0;i<ar.length;i++)
    { 
        if(ar[i]%3==0||ar[i]%5==0){
           sum=sum+ar[i]
        }
    }
    return sum
}