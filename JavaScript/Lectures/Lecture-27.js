// FOR LOOP WITH BREAK AND WHILE

// FOR LOOP

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element===5){
        console.log("5 is best number");
    }
    console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i*j)
    }
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("File detected")
        break;            // loop stop 
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("File detected")
        continue;            // loop jumps from 5 
    }
    console.log(`Value of i is ${i}`);
}