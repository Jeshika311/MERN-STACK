function countCharacters(str) {
    const count = {};

    for (let char of str) {
        // Optional: convert to lowercase to make it case-insensitive
        char = char.toLowerCase();

        // Optional: skip spaces
        if (char === " ") continue;

        // Count characters
        count[char] = (count[char] || 0) + 1;
    }

    return count;
}

let result = countCharacters("my name is jeshika")
console.log(result)