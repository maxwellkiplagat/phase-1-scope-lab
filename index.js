var customerName = 'bob'
var bestCustomer;
const leastFavoriteCustomer= 'doe'
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'john'
}