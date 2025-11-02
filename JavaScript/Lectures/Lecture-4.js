// let , const and var ki kahani

console.log("Jeshika")

const accountId = 144553
let accountEmail = "jeshikasharma@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 3432  shows error

accountEmail = "hchc@gmail.com"
accountPassword = "935788"
accountCity = "Bengluru"

console.log(accountId)

console.table([accountId , accountEmail , accountPassword, accountCity , accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/