//reverse a number
let num = 123;
function reverse(x){
  let sign=x<0?-1:1;
  x=Math.abs(x).toString().split("").reverse();
  x=x.join("")
  console.log(x);
  
}

reverse(1234)