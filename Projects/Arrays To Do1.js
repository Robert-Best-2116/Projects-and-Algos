
//Push to the front of an Array 


// let array = [1,2,3,4,5];
// console.log(array)

//Uses built in method, did with research, just installed code whisper, scarry how efficient it is. 
// const pushFront = (arr,val) => { 
//     arr.unshift(val);
    
//     return arr;
// }

// console.log(pushFront(array,0));

//let array = [1,2,3,4,5];

const pushFront = (arr,val) => {
    for(let i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;

}

console.log(pushFront(array,0));


//Pop Front 

//given an array, remove and return the value at the beginning of the array., prove the value is removed from the array by printing the array
//initially used         if (i === arr.length - 1) { break } but it left undefined, 

//let array = [1,2,3,4,5];

const popFront = (arr) => {
    let firstValue = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return firstValue;
}

console.log(popFront(array));


//let array = [1,2,3,4,5];

// Insert At 

const insertAt = (arr, index, val) => {
    for (let i = 0; i < arr.length; i++){
        if (i === index){
            arr[i] = val;
        }
    }
    return arr;
}

console.log(insertAt(array, 3, 0));

//Code whisper is good at understanding what your coding, but its very sterile in its naming conventions, very little life to it. 


let array = [1,2,3,4,5];

