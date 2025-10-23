// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

function majorityElement(nums: number[]): number {
    let numberOfRepeats  = 0;
    let majorityNumber = 0;

    for (let i = 0; i < nums.length; i++ ) {
        if(numberOfRepeats === 0) {
            majorityNumber = nums[i];
            numberOfRepeats++
        } else if ( nums[i] === majorityNumber ) numberOfRepeats++
        else numberOfRepeats--
    }

    return majorityNumber
};