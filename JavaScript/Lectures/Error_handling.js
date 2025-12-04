// ERROR HANDLING 

// Types :- compile time and run time error

// how to handle 


try{
    console.log(x);
    // it directly goes to catch and no further execution in try block
    // if no error then catch does not execute
}
catch(e){
    // in this we define that what to do with errors
    console.log("ERROR : Resolve error")
}
finally{
    // this will run everytime
    console.log("Execution done.")
}

 
// how to create custom errors

try{
    console.log(x);
}
catch(err)
{
    throw new Error("you are trying to print a variable without declae it.")
}

let errorCode = 100;
if(errorCode === 100) {
    throw new Error("Invalid JSON");
}