// THE DOM

// Grab a reference to the #page-title element
var headingContainer = document.querySelector("#page-title");

// Set the innerHTML of the page title
headingContainer.innerHTML = "This is my awesome website!";
console.log(headingContainer);


// Build an object representing the current weather conditions
var todaysWeather = {
    temperature: 32,
    date: "Saturday, Dec 8",
    conditions: "Sunny and cold"
}
// Get a reference to the DOM elements
var tempContainer = document.querySelector("#temperature");
var dateContainer = document.querySelector("#todays-date");
var conditionsContainer = document.querySelector("#conditions");

// Set their innerHTML to the corresponding data
tempContainer.innerHTML = todaysWeather.temperature;
dateContainer.innerHTML = todaysWeather.date;
conditionsContainer.innerHTML = todaysWeather.conditions;


// Build another weather object representing tomorrow's weather
// Include an icon url: https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png
var tomorrowWeather = {
    temperature: 75,
    date: "Sunday, Dec 9",
    conditions: "Sunny",
    imageUrl: "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png"
}

// Build an HTML string to display the weather information (with an img)
var HTMLString = `
    <h3>${tomorrowWeather.date}</h3>
    <p>${tomorrowWeather.temperature}</p>
    <p>${tomorrowWeather.conditions}</p>
    <img class="weather-icon" src=${tomorrowWeather.imageUrl} alt="Weather icon"/>`


    // Get a reference to the #tomorrow section and set its innerHTML to the HTML string
var tomorrowContainer = document.querySelector("#tomorrow");
tomorrowContainer.innerHTML = HTMLString;

// This does the same thing:
// document.querySelector("#tomorrow").innerHTML = HTMLString;









//CONDITIONALS

// 2+2 === 4 --> evaluates to true 
// If statements check to see if the code in the parentheses evaluates to true


// Check and see if a user is logged in
// If they are, print "Welcome back!""
// If they're not, print "Please Log In!""


// Declare a variable that represents a time of day

// Check to see if the time of day is "morning", "afternoon", etc and print a greeting accordingly into "conditionals-container"

// Declare a variable that represents the current temperature
// Check to see if the temperature is less than or equal to 32. How about greater than or equal to 85? 




