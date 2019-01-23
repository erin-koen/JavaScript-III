/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - written in the global scope, the 'this' keyword refers to the window object 
* 2. Implicit binding - whenever a function is called using dot notation, 'this' keyword references the object to the left of the dot. 
* 3. New binding - when a constructor function is used to create a new object, 'this' references the object that the function is creating. 
* 4. Explicit binding - using the .bind .call .apply keywords to link the 'this' keyword from a parent to a child object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// // code example for Window Binding
// const someFunction = function() {
//     console.log (`${this.name} is bound to the global scope`);
// }


// Principle 2

// code example for Implicit Binding
// const apartment = {
//     size: 500,
//     neighborhood: 'brooklyn heights',
//     floor: 6,
//     describe: function(){
//         console.log(`i may not have much, but I do have ${this.size} square feet on the ${this.floor}th floor of a building in ${this.neighborhood}`);
//     }
// }
// apartment.describe();

// Principle 3

// code example for New Binding
// function Property(bedrooms, bathrooms, town){
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.town = town;
//     this.listing = function(){
//         console.log(`this house has ${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms, and is for sale in ${this.town}`)
//     }
// }

// const pineStreet = new Property(4, 3, 'Hamilton');
// pineStreet.listing();


// // Principle 4
// // code example for Explicit Binding

// const location = {
//     location: "brooklyn"
// }
// const fruitStreets = ['pineapple street', 'cranberry street', 'orange street'];

// function describe(streets){
//     console.log(`I live in ${this.location}, close to ${fruitStreets}`)
// }

// describe.call(location, fruitStreets);
