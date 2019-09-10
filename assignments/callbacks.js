// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.



/* 
  // GIVEN THIS PROBLEM:
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // SOLUTION:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // NOTES ON THE SOLUTION:
  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.
  // TEST 1 (inlined callback):
  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"
  // TEST 2 (declaring callback before hand):
  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };
  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    return cb(arr.length);
};
console.log(getLength(items, length => `The length of the array is ${length}`))


function last(arr, cb) {
    // last passes the last item of the array into the callback.
    return cb(arr[arr.length - 1])
}
console.log(last(items, function(lastitem) {
    return `the last item of the items array will be!: ${lastitem}`
}));

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}
console.log(sumNums(2, 3, num => `this is the result if you add it: ${num}`))

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
}
console.log(multiplyNums(2, 3, function(num) {
    return `this is the result if you multiply it: ${num}`
}));

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    for (let i = 0; i < item.length; i++) {
        if (item[i] === list) {
            return (cb(true))
        } else {
            return cb(false)
        }
    }
}
console.log(contains(items, 'Pencil', item => `${item} is the answer to this search`));
/* STRETCH PROBLEM */


const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
    const duplicatefree = new Set(array);
    const backtoarray = [...duplicatefree];

    return cb(backtoarray)

}

console.log(removeDuplicates(items2, (noduplicate) => {
        return `Now these are no longer duplicate:( ${noduplicate} ) while keeping old values on items2 as well`
    }))
    //console.log(items2) -un this to verify that original array was not mutated..