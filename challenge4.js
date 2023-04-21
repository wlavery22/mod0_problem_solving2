// Start with an array of travel destinations. Print every travel destination in alphabetical order 
// embedded in a sentence using string interpolation. For example, if the destination is 
// "New York City", print something like "The next place I want to visit is New York City!"

var destinations = ["NYC", "Vancouver", "Victoria", "Port Townsend", "Bellingham"];
for (var i = 0; i < destinations.length; i++) {
    destinations.sort()
    console.log(`I can't wait to visit ${destinations[i]} and then...`);
};

// The goal is to print a sentence interpolating each of the destinations into it in alphabetical order. 
// So it should print 5 sentences each with a different destination. This should start with an array of 
// strings, a for statement, and then a method to arrange the cities, the elements in the array, in 
// alphabetical order, and finally I need a console.log statement that will print the sentence about 
// visiting the cities and interpolate the city names into it.   