let vowels = ["a","e","i","o","u"]
let str = "jeshika sharma"
let vowel_count = 0
let consonant_count = 0
let space_count = 0

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    
    if (vowels.includes(ch)) {
        vowel_count++;
    } else if (ch === " ") {
        space_count++;
    } else if (ch >= 'a' && ch <= 'z') {
        consonant_count++;
    }
    // Ignore non-alphabetic characters if needed
}

console.log("Vowels:", vowel_count);
console.log("Consonants:", consonant_count);
console.log("Spaces:", space_count);