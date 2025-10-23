// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
/**
that was also a question in a coding assessment i took 
but this was not the solution i used,
i did think like that back then, i iterated throught the array and 
shifted the element inside a for loop using another array 
 */

function rotate(nums: number[], k: number): void {
    const n = nums.length; 
    k = k % n // this is used to handle cases when k > nums.length 
    if (k === 0) return;
    if (k === nums.length) return;
    nums.unshift(...nums.splice(nums.length - k, k));
};

let arr = [1,2]
rotate(arr, 7)
console.log(arr)