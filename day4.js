// 𝗙𝗶𝗻𝗱 𝘁𝗵𝗲 𝗠𝗮𝘅𝗶𝗺𝘂𝗺 𝗡𝘂𝗺𝗯𝗲𝗿 𝗼𝗳 𝗪𝗼𝗿𝗱𝘀 𝗙𝗼𝘂𝗻𝗱 𝗶𝗻 𝗦𝗲𝗻𝘁𝗲𝗻𝗰𝗲𝘀
// You are given an array of string sentences, where each sentence [i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// 𝗜𝗻𝗽𝘂𝘁:: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much this is great thanks very much this is great thanks very much"]
// 𝗢𝘂𝘁𝗽𝘂𝘁: 18



const sentences = [
  "alice and bob love leetcode", 
"i think so too", 
"this is great thanks very much this is great thanks very much this is great thanks very much"];

let max=0;
let numOfWords=0
function count(){
  for(i=0;i<3;i++){
    numOfWords=sentences[i].split(" ").length;
  numOfWords=Math.max(numOfWords)
  }
return numOfWords
}
console.log(count())