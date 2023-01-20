
// modifying original array
const arr=[0,0,1,1,1,2,2,3,3,4];
for(i=0;i<arr.length;){
  if(arr[i]===arr[i+1]){
    arr.splice(i,1)
  }
  else{
    i++
  }
}

// Removing diplicates by creating new array
const arr1=[0,0,1,1,1,2,2,3,3,4];
let arr2=[]

 for(i=0;i<arr1.length;i++){
   if(arr2.indexOf(arr1[i])===-1){
     arr2.push(arr1[i])
   }
 }
 
 console.log(arr2)

