// Given an integer array nums and an integer val, 
// remove all occurrences of Val in nums in place. The relative order of the elements may be changed.
var removeElement=(arr,val)=>{
  for(i=0;i<arr.length;){
    if(val===arr[i])
    {
      arr.splice(i,1)
      
    }
   else i++;
  }
  return arr.length;
}

var input1=[2,2,3,3,4];
var input2=2

console.log(removeElement(input1,input2))


