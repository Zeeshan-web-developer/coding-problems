// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only


let words = "Hi How are you are you fine";

(function () {
    console.log({words})
    let arr = words.trim().split(" ");
    console.log( arr[arr.length-1].length) 
})();