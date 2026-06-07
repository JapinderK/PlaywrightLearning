// ============ Sort & Compare Method ============
// Anagram: Two strings are anagrams if they contain the same characters in different order

const isAnagram = (str1, str2) => {
    // Step 1: Remove spaces and convert to lowercase
    const s1 = str1.replace(/\s/g, "").toLowerCase();
    const s2 = str2.replace(/\s/g, "").toLowerCase();
    
    // Step 2: Split into characters, sort, and rejoin
    const sorted1 = s1.split("").sort().join("");
    const sorted2 = s2.split("").sort().join("");
    
    // Step 3: Compare sorted strings
    return sorted1 === sorted2;
};

// Test cases
console.log(isAnagram("eat", "tea")); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("read", "dear")); // true
console.log(isAnagram("a b c", "c b a")); // true