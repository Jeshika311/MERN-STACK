function findLongestWord(sentence) {
    return sentence
        .split(" ")
        .reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, "");
}

let sntnce = "my name is jeshika sharma"
console.log(findLongestWord(sntnce));