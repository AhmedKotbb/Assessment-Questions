/*
Find the Length of the Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
 Example 1: Input: s = "abcabcbb" 
 Output: 3 Explanation: The longest substring is "abc",
 which has a length of 3.
*/


function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let maxLength = 0;
    const seen = new Set<string>();

    for (let right = 0; right < s.length; right++) {
        // If the character is already in the set, shrink the window from the left
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        // Add the current character to the set
        seen.add(s[right]);

        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const input = "abcabcbb";
const output = lengthOfLongestSubstring(input);
console.log(`Input: "${input}"`);
console.log(`Output: ${output}`);