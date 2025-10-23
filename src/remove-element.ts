// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) return 0;
    // use a new array that have only values not equal to val
    let result: any[] = [];
    nums.forEach((num: number)=> {
        if(num != val) result.push(num);
    })

    console.log("result array", result);
    console.log('number of elements', result.length);
    return result.length
};

function removeElementV2(nums: number[], val: number): number {
    if (nums.length === 0) return 0;
    // use the same array so i remain the same array length and save memory
    let count: number = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if( nums[i] !== val ) {
            nums[count] = nums[i];
            count++
        }
    }
    console.log("result", nums);
    console.log('number of elements not equal to val', count);
    return count;
}

