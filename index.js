// Write your solution in this file!
// Declare a global variable called customerName using the var keyword
var customerName="bob"


// Write a function that accesses the global customerName variable, and uppercases it
function upperCaseCustomerName(){
    customerName=customerName.toLocaleUpperCase()
    return customerName
    
}
// Write a function that declares a global variable called bestCustomer and assigns it a value
function setBestCustomer(){
     bestCustomer='not bob'
    return bestCustomer
}
// Write a function that overwrites the value of the global bestCustomer variable
function overwriteBestCustomer(){
     bestCustomer='maybe bob'
    return bestCustomer
}
// Declare a constant in global scope called leastFavoriteCustomer and assign it a value
const leastFavoriteCustomer="kim"

// Write a function that tries to change the value of the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='kimm'
}