// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// to protect it from global scope pollution

(function chai() {              // named IIFE
    console.log(`DB CONNECTED`);
})();                                         // must end this with semicolon

( (name) => {              // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Jeshika");
