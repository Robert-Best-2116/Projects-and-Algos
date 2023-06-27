
//Countdown
//Create a function that accepts a number as an input. Return a new array that counts down by one, from the number to 0, how long is this array?

//create the countdown function that accepts an input called num.
//that function, will return a new array that starting from the num input counts down to zero. 
//so well need a new array, and a for loop that assigns num to i, and loops through until i = 0, and i will reduce by one. 
//in the for loop we will need to push i to the new array during each iteration. 
//after the for loop is finished, we will need to return the new array as well as the array length. 
let countdown = (num) => {
    arr = []
    for(let i = num; i >= 0; i--){
        console.log(i)
        arr.push(i);
    }
    console.log(arr)
    return arr, arr.length
}

console.log(countdown(5))

//Two Sums 

let twoSum = (nums, target) => {
    let previousNums = {}
    for (let i = 0; i < nums.length; i++){
        let currentNum = nums[i]
        let neededValue = target - currentNum
        let index2 = previousNums[neededValue]
        if (index2 != null) {
            return [index2, i]
        } else {
            previousNums[currentNum] = i
        }
    }
}

console.log(twoSum([2,11,7,15], 9))

