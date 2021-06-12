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
console.log("The Sum of Even Numbers in the Array")
console.log(res)
function add(){
    var sum=0
    for(let i=0;i<ar.length;i++)
    {
        if(ar[i]%2==0){
            sum=sum+ar[i] 
        }
    }
    return sum
}