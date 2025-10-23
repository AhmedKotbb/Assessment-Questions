// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
    // use two pointers method 
    if (nums.length == 0) return 0;
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    console.log('result:', nums);
    console.log('count:', j + 1);
    return j + 1;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
removeDuplicates([1, 1, 2])


function removeDuplicatesV2(nums: number[]): number {
    // create new array contain the elements without duplication
    if (nums.length == 0) return 0;
    let count: number = 0;
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            result.push(nums[i]);
            count++;
        }
    }

    console.log('result:', result);
    console.log('count:', count);
    return count
}

removeDuplicatesV2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
removeDuplicatesV2([1, 1, 2])