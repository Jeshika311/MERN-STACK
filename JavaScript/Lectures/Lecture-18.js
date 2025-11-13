// OBJECT DE-STRUCTURE AND JSON API 

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor    there is a alternative method to use this 

const {courseInstructor : instructor} = course
console.log(instructor);    

// in this we doesnt have to write course.courseInstructtor each time we use this command
// this is called de structuring of an object
// in this we can also change name to use 


// JSON

// json are like object but in json both keys are strings
// api are also in the form of arrays 
[
    {},
    {},
    {}
]