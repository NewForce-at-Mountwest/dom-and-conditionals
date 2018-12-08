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

console.log(1+1===2);

// If statements check to see if the code in the parentheses evaluates to true
if(3+3===7){
    console.log("three plus three is indeed seven!");
}

var myName = "Dwayne The Rock Johnson";

if(myName === "Dwayne The Rock Johnson"){
    console.log("Congrats!");
} else {
    console.log("Too bad for you.")
}

var stringTwo = "2";

var numberTwo = 2;

if(stringTwo == numberTwo){
    console.log("they're the same!");
}

// Check and see if a user is logged in
var loggedIn = false;


// If they are, print "Welcome back!""
// If they're not, print "Please Log In!""
if(loggedIn){
    console.log("Welcome!");
} else {
    console.log("Please log in.")
}



// Declare a variable that represents a time of day
var timeOfDay = "morning";
var isSunny = true;

// Check to see if the time of day is "morning", "afternoon", etc and print a greeting accordingly into "conditionals-container"
if(timeOfDay === "morning" && isSunny === true){
    console.log("Good morning! It's so nice out.")
} else if (timeOfDay === "afternoon" || isSunny === false){
    console.log("good afternoon! go outside")
} else if (timeOfDay === "evening" && isSunny === true){
    console.log("Good evening! The world is probably ending.")
} else {
    console.log("Whatever!")
}
// Declare a variable that represents the current temperature
// Check to see if the temperature is less than or equal to 32. How about greater than or equal to 85? 

var currentTemp = 34;

if(currentTemp >= 32 && currentTemp <= 40){
    console.log("It's between 32 and 40 degrees")
} else if (currentTemp <= 20){
    console.log("don't go out you'll die")
} else {
    console.log("It's fine out!")
}


