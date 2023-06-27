//Palindrome Number 
//Given an integer x return true if x is a palindrome, and false otherwise. 

//create our palindrome function with the argument of x
//create a new array by splitting x into an array 
//create a temp array to push the new values too 
//console.log arr to ensure that it worked properly
//create our for loop, i needs to be equal to the length of the array we created. i will need to stop when its equal to 0, and it will decrease by 1 each time
//inside of our for loop we need to push the index of the array to the temp array, keeping in mind that index is -1 length of the array. tempArray.push(num[i-1]) 
//console log num[i-1]
//console.log tempArr
//after the for loop, we run an if check, to compare arr and tempArr if (arr == newArr) {true}
//else {false}

let palindrome = (x) => {
    let arr = Array.from(String(x), Number)
    console.log("arr", arr)
    let tempArr = []
    for(let i = arr.length; i > 0; i--){
        //console.log(i)
        tempArr.push(arr[i-1])
        //console.log("for loop", arr[i-1])
    }
    console.log("tempArr", tempArr)
    if(arr.toString() == tempArr.toString()){
        return true
    } else {
        return false
    }
}
console.log(palindrome(125))
console.log(palindrome(1001))
console.log(palindrome(1))

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

//My example s= true , t= trxuse
//output: true 

//function, with two paramaters, s & t, => 
//temp variable (array), holds the letters of t that are = to the letters of s. 
//convert t & s into arrays, 
// iterate through t w/ for loop, compare the values of s to t, if they are the same, pop them to the temp array
// convert the arrays to strings, and compare
// return true if s can be found inside of t. 


    //what i want to do is compare the values of arrS[x] = arrT[i]
    //create a new variable, that is equal to 0 arrS[x] = variable, 
    //if check, if arrS[x] = arrT[i] variable++

let subsequence = (s, t) => {
    let tempArr = []
    let arrS = Array.from(String(s), String)
    let arrT = Array.from(String(t), String)
    let x = 0;
    for (let i = 0; i < arrT.length; i++){
        if(arrS[x] == arrT[i]){
            tempArr.push(arrT[i])
            x++
        }
    }
    return tempArr.toString() == arrS.toString()
}

console.log(subsequence("true", "trxuse") == true)
console.log(subsequence("true", "trxus") == false)
console.log(subsequence("use", "trxuse")== true)

console.log("abc".split(""))
//instead of recording letters, compare the indexes of where the letters are in T 
//instead of pushing letters i could push their indexes and compare the length? or check that there in order. 

//tests over console.log, console log your expectation. 
//split up my code more- what operators can be isolated into their own functions. Ie converting or splitting the stirngs into arrays, or the return statement, give the functions names that describe what they do. 

//create descritive variable names, refraine from using single letters

//code smell ie something is bad, if you need to console log it, write it as its own function. 



// length of last word

//given a string s consisting of words and spaces, return the length of the last word in the string.

//edge cases, ' or multiple spaces 
//result is a num, if happy is the last word then 5 would be the output

//today i am happy 
// arrow function, passing in s. 
// were gonna wanna split s on " " s.split(" ") and create a new variable as that, so splitSentence = s.split(" ") gonna wanna console log that to see the result.
// then were going to iterate through that, or do we have to? could we just target the last index in the new array that is created from splitting s? 
//something like lastWordLength = splitSentence.length(-1)[i].split("").length 
//return lastWordLength 

//outside of edge cases where the sentence has multiple spaces " " it works cool. now lets remove the extra spaces. 
//it looks like filter might be a good idea. so lets write a second function that filters our words for us. 
//looked into filtering out white spaces, best result was found on stackoverflow instead of youtube or docs, using a String function .trim() which removes white spaces

// Length of the Last Word Function
let lengthOfLastWord = (s) => {
    splitSentence = s.split(" ")
    filteredWord = splitSentence.filter(word => word.trim())
    lastWordLength = filteredWord[filteredWord.length -1].split("").length
    return lastWordLength
}

console.log(lengthOfLastWord("Today I am happy"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))