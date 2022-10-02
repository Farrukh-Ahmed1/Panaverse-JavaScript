let myFavouriteDestinations = ['Greece','Tokoyo','Germany','Greenland','Austria']
for(myFavouriteDestination of myFavouriteDestinations){
    console.log(`I would love to visit ${myFavouriteDestination}`); // The oringal
}
console.log(`Alphabetical Order`,myFavouriteDestinations.slice().sort()); // The aplhabetic Order

console.log(`The oringal array -`, myFavouriteDestinations); // Showing Orignal Again

console.log(`Reversed alphabetical order -`,myFavouriteDestinations.slice().sort().reverse()); // Reversing to Aplhabetic Order

console.log(`The oringal array -`, myFavouriteDestinations); // Showing Orignal Again

console.log(`Reversing again -`,myFavouriteDestinations.reverse());

console.log(`Reversing again to show its orignal order -`, myFavouriteDestinations.reverse());

let alphabeticalOrderArray = myFavouriteDestinations.sort();
console.log(`The Alphabetic Order -`, myFavouriteDestinations);

let reverseAlphabeticOrderArray = myFavouriteDestinations.sort().reverse();
console.log(`The reversed Alphabetic order -`, myFavouriteDestinations);