
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// let  arr=[1,2,3,4,5,6];

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

let output=[0];
let prev=0;
const fun=()=>{
  for(var i=0;i<arr.length;i++){
    
    
  if(i==0){
     output[i]=output[prev]+arr[i];
  }
   else
   {
     output[i]=output[prev]+arr[i];
   prev++
   }
  
}
return output
}

console.log(fun())




