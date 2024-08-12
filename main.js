//////////////////////////// PART 1 ////////////////////////////

/*
Take an array of  numbers and return the sum.
Take an array of  numbers and return the average.
Take an array of  strings and return the longest string.
Take an array of  strings, and a number and return an array of  the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
 */


const numArray1 = [1, 3, 5, 7, 9]
const numArray2 = [2, 4, 6, 8, 10]
const numArray3 = [1, 1, 1, 1, 1]

// take an array of  numbers and return the sum.
function arraySum(myArray) {
    return myArray.reduce((sum, current) => sum + current)
}
console.log(`The sum of numArray1 is ${arraySum(numArray1)}`)
console.log(`The sum of numArray2 is ${arraySum(numArray2)}`)
console.log(`The sum of numArray3 is ${arraySum(numArray3)}`)

// take an array of  numbers and return the average.
function arrayAverage(myArray) {
    return arraySum(myArray) / myArray.length
}
console.log(`The average of numArray1 is ${arrayAverage(numArray1)}`)
console.log(`The average of numArray2 is ${arrayAverage(numArray2)}`)
console.log(`The average of numArray3 is ${arrayAverage(numArray3)}`)

const strArray1 = ["cat", "ball", "function", "dog"]
const strArray2 = ["arrow", "scoped", "hoisting", "javscript"]
const strArray3 = ["map", "sort", "filter", "reduce"]

// take an array of  strings and return the longest string.
function arrayLongest(myArray) {

    // sort the strings from longest to shortest
    return myArray.sort((a, b) => {
        if (a.length < b.length)
            return 1
        else
            return -1
        // get index of first longest string
    })[0]
}
console.log(`The longest string in strArray1 is ${arrayLongest(strArray1)}`)
console.log(`The longest string in strArray2 is ${arrayLongest(strArray2)}`)
console.log(`The longest string in strArray3 is ${arrayLongest(strArray3)}`)


// take an array of strings, and a number and return 
// an array of the strings that are longer than the given number. 
function stringsGreaterThanN(myArray, n) {
    return myArray.filter((word) => word.length > n)
}
console.log(`The strings longer than 4 characters are: ${stringsGreaterThanN(strArray1, 4)}`)
console.log(`The strings longer than 5 characters are: ${stringsGreaterThanN(strArray2, 5)}`)
console.log(`The strings longer than 2 characters are: ${stringsGreaterThanN(strArray3, 2)}`)


// take a number, n, and print every number 
// between 1 and n without using loops. Use recursion.
function recursivePrint(start = 1, n = 10) {

    // if start is less than n
    if (start < n) {

        //log number
        console.log(start)

        // recurse, incrementing the start value by 1
        recursivePrint(start + 1)
    }
}
recursivePrint()


//////////////////////////// PART 2 ////////////////////////////
// const myData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "48", name: "Barry", occupation: "Runner", age: "25" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// function sortByAge(data, ascending = true) {
//     const sortAsc = (a, b) => parseInt(a.age) - parseInt(b.age)
//     const sortDsc = (a, b) => parseInt(b.age) - parseInt(a.age)
//     return data.sort(ascending ? sortAsc : sortDsc)
// }
// console.log("sort by age ascending:")
// console.log(sortByAge(myData))
// console.log("sort by age descending:")
// console.log(sortByAge(myData, false))


// function filterByAge(data, max = 50) {
//     return data.filter(obj => parseInt(obj.age) < max)
// }
// console.log("Removed entries with age greater than 50")
// console.log(filterByAge(myData))

// function changeKey(myData, newKey = "job", oldKey = "occupation") {

//     //https://stackoverflow.com/questions/4647817/javascript-object-rename-key
//     return myData.map(obj => {

//         // increment age by 1
//         obj.age = String(parseInt(obj.age) + 1)

//         // define newKey property on obj 
//         Object.defineProperty(obj, newKey,

//             // declare a new descriptor from the old key
//             Object.getOwnPropertyDescriptor(obj, oldKey))

//         // delete the oldKey entry   
//         delete obj[oldKey]

//         // return the object
//         return obj
//     }
//     )
// }
// console.log("Changed occupation key to job:")
// console.log(changeKey(myData))

// function ageSum(data) {
//     // must set initial to 0
//     return data.reduce((sum, obj) => sum + parseInt(obj.age), 0)
// }
// console.log(`The sum of ages is: ${ageSum(myData)}`)


// function avgAge(data) {
//     return ageSum(data) / data.length
// }
// console.log(`The average age is: ${avgAge(myData)}`)
