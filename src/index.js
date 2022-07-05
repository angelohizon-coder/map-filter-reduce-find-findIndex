import emojipedia from "./emojipedia.js";

var numbers = [3, 56, 2, 48, 5];

//Map - Create a new array by doing something with each item in an array.
const mapNumbers = numbers.map(function(mapNumber) {
    return mapNumber;
});

console.log("Map Function: " + mapNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function(filterNumber) {
    return filterNumber < 5;
});

console.log("Filter Function: " + filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const reduceNumber = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log("Reduce Function: " + reduceNumber); 

//Find - find the first item that matches from an array.
const findNumber = numbers.find(function(number){ 
    return number > 40 && number < 50;
});

console.log("Find Function: " + findNumber);
 
//FindIndex - find the index of the first item that matches.

const findIndexNumber = numbers.findIndex(function(number){ 
    return number > 40 && number < 50;
});

console.log("Find Index Function: " + findIndexNumber);

// Challenge

console.log(emojipedia);

const meaningArray = emojipedia.map(function(emoji){
    return emoji.meaning.substring(0,100);
});

console.log("List of Meaning: " + meaningArray);
