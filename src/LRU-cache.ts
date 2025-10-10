/*
Implement an LRU Cache Algorithm in js 
Have the function LRUCache( strArr ) take the array of characters stored in strArr, 
which will contain characters ranging from A to Z in some arbitrary order, 
and determine what elements still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm implemented.
 For example, if strArr is ["A", "B" , "C" , "D" , "A", "E" , "D" , "Z"], then the following steps are taken: "A" doesn't exist in the cache, 
so store it in the cache "B" doesn't exist in the cache, so store it in the cache; so far, the cache contains: ["A", "B"]. 
"C" doesn't exist in the cache, so store it in the cache "D" doesn't exist in the cache, 
so store it in the cache; so far, the cache contains: ["A", "B", "C", "D"].
 Now A is accessed again, but it exists in the cache already, 
so it is brought to the front: ["B", "C", "D", "A"]. "E" doesn't exist in the cache, so store it in the cache; so far the cache contains: ["B", "C", "D", "A", "E"]. D is accessed again, 
so it's brought to the front as follows: so far the cache contains: ["B", "C", "A", "E", "D"]. Z does not exist in the cache, so add it to the front & remove the least recently used element; 
so far the cache contains: ["C", "A", "E", "D", "Z"]. 
Now the caching steps have been completed, 
and your program should return the order of the cache with the elements joined into a string, separated by a hyphen. Therefore,
 for the example above, your program should return C-A-E-D-Z
*/

function LRUCache(strArr: string[]): string {
  const capacity = 5;
  const cache: string[] = [];

  for (const item of strArr) {
    const index = cache.indexOf(item);

    if (index !== -1) {
      // Item exists → remove from old position
      cache.splice(index, 1);
    } else if (cache.length >= capacity) {
      // Remove least recently used (first element)
      cache.shift();
    }

    // Add new or re-accessed item to the end (most recent)
    cache.push(item);
  }

  // Return the cache order joined with '-'
  return cache.join("-");
}


// Example usage:
const result = LRUCache(["A", "B", "C", "D", "A", "E", "D", "Z"]);
console.log(result); // Output: C-A-E-D-Z
