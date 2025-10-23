// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
function removeDuplicatesII(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let writeIndex = 2; // Start from index 2 since first two elements can stay

    for (let readIndex = 2; readIndex < nums.length; readIndex++) {
        // If current element is different from element at writeIndex - 2,
        // it means we can include it (since we allow at most 2 duplicates)
        if (nums[readIndex] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    console.log(nums);
    return writeIndex;
};

console.log(removeDuplicatesII([1, 1, 1, 2, 2, 3]));
