
const palindrome = (str) => {

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = str.length - 1; j >= 0; j--) {
            if (str.charAt(i).match(str.charAt(j))) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
console.log(palindrome("madam"));
console.log((palindrome("japinder")));


