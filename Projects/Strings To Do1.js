

//Remove Blanks 

let firstString = "Squished Together!"

const removeBlanks = (word) => {
    let changedString = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            changedString += word[i]
        }
    }
    return changedString;
}

console.log(removeBlanks(firstString));

//Get Digits 

let digits = "5e1a5es1a6s51df6sa5efa8e16as5d1f"

const getDigits = (word) => {
    console.log(word)
    let onlyDigits = ""
    for (let i = 0; i < word.length; i++) {
        if (!isNaN(word[i])) {
            console.log(word[i])
            onlyDigits += word[i]
        }
    }
    return Number(onlyDigits)
}

console.log(getDigits(digits))


//Acronyms 

let secondString = "this will be a challenge"

const toAcronym = (word) => {
    let acronym = " "
    let splitString = word.split(" ")
    console.log(splitString)
    for (let eachWord in splitString) {
        console.log(splitString[eachWord][0])
        acronym += splitString[eachWord][0]
        
    }
    return acronym.toUpperCase()
}

console.log(toAcronym(secondString))

// Count Non Spaces 

let thirdString = "Squished Together!"

const countNonSpaces = (word) => {
    let changedString = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            changedString += word[i]
        }
    }
    return changedString.length;
}

console.log(countNonSpaces(thirdString));


//Remove Shorter Strings 

let fourthString = ["Time", "to", "remove", "the", "little", "words"]

const removeShortWords= (words, num) => {
    let changedString = []
    let nextIndex = 0
    for (let eachWord in words) {
        //console.log(eachWord)
        if (words[eachWord].length >= num) {
            console.log(words[eachWord])
            changedString[nextIndex] = words[eachWord]
            nextIndex++
        }
    }
    return changedString
}

console.log(removeShortWords(fourthString, 4))

//this one was confusing, watched solution video for hints. 