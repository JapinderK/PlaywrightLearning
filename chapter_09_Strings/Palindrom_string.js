
// Method 1: Using reverse() method
const isPalindromeMethod1 = (str) => {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    return cleaned === cleaned.split('').reverse().join('');
};

// Method 2: Using two-pointer approach
const isPalindromeMethod2 = (str) => {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Method 3: Using for loop comparison
const isPalindromeMethod3 = (str) => {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    
    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Test cases
console.log("Method 1 (reverse):");
console.log(isPalindromeMethod1("madam"));        // true
console.log(isPalindromeMethod1("japinder"));     // false
console.log(isPalindromeMethod1("A man a plan a canal Panama")); // true
console.log(isPalindromeMethod1("racecar"));      // true

console.log("\nMethod 2 (two-pointer):");
console.log(isPalindromeMethod2("madam"));        // true
console.log(isPalindromeMethod2("japinder"));     // false
console.log(isPalindromeMethod2("A man a plan a canal Panama")); // true

console.log("\nMethod 3 (for loop):");
console.log(isPalindromeMethod3("madam"));        // true
console.log(isPalindromeMethod3("japinder"));     // false
console.log(isPalindromeMethod3("A man a plan a canal Panama")); // true


