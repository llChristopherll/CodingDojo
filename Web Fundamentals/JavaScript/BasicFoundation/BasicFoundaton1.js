// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function oneto255() {
  var res = [];
  for (let index = 1; index < 256; index++) {
    res.push(index);
  }
  return res;
}

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function even() {
  let res = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      res = res + i;
    }
  }
  return res;
}

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd() {
  let res = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 == 1) {
      res = res + i;
    }
  }
  return res;
}

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function it(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    res = res + e;
  }
  return res;
}

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function largest(a) {
  let check = Array.isArray(a);
  if (!check) {
    return "must provide an array payload; " + String(a);
  }
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}
// let a = [-3,20,5,7]
// largest(a)

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function ave(arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  average = sum / arr.length;
  return average;
}
// let a = [1,3,5,7,20]
// console.log(ave(a));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odd() {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(odd())

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr
//  = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greater(arr) {
  let y = 3;
  let great = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      great.push(arr[i]);
    }
  }
  return great;
}
// let a = [1, 3, 5, 7]
// console.log(greater(a))

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
//  (e.g. [1,5,10,-2] will become [1,25,100,4])

// push into new array
function squares(arr) {
  let squared = [];
  for (let i = 0; i < arr.length; i++) {
    square = arr[i] * arr[i];
    squared.push(square);
  }
  return squared;
}
// let a = [1,5,10,-2]
// console.log(squares(a))

// replaces array values
function squares(arr) {
  for (let i = 0; i < arr.length; i++) {
    square = arr[i] * arr[i];
    arr[i] = square;
  }
  return arr;
}
// let a = [1,5,10,-2]
// console.log(squares(a))

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program
//  is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
// let a = [1,5,10,-2]
// console.log(negatives(a))

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the
//  original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function mma(arr) {
  let max = 0;
  let min = 0;
  let sum = 0;
  let ave = 0;
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  ave = sum / arr.length;
  newarr.push(max);
  newarr.push(min);
  newarr.push(ave);
  return newarr;
}
// let a = [1,5,10,-2]
// console.log(mma(a));

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.
//  (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(array) {
  let last = 0;
  let first = 0;
  for (let i = 0; i < array.length; i++) {
    if (i > last) {
      last = i;
    }
  }
  let lastitem = array[last];
  array[last] = array[first];
  array[first] = lastitem;
  return array;
}
// let a = [1,5,10,-2]
// console.log("Chris's Answer = " + swap(a));

// Fat Array style
const swapFirstLast = (array) => {
  const temp = array[array.length - 1];
  array[array.length - 1] = array[0];
  array[0] = temp;
  return array;
};
// let payload = [1,5,10,-2];
// let response = swapFirstLast(payload);
// console.log("Scott's Answer = " + response);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with
//  the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function dojo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
// let a = [-1,-3,2]
// console.log(dojo(a));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  let success = [];
  for (let l = nums.length - 1; l < nums.length; l--) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[l] + nums[i] == target) {
        if (i != l) {
          success.push(l);
          success.push(i);
          return success;
        }
      }
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
