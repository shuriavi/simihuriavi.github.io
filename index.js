let dayNames = [Sunday, Monday, Tuesday, 
    Wednesday, Thursday, Friday, Saturday];

let months = [January, Febuary, March, April,
    May, June, July, August, September, October,
    November, December]

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " 
    + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").textContext = fulldate;


try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-us", options);
}   catch(e){
    alert("Error with code or your browser does not support Locale");
}