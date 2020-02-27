$(document).ready( () => $('.dropdown-trigger').dropdown());

const portfolioObjects = [{
  name: "VEG-HEAD",
  screenshot: "./assets/images/VH-ss.JPG",
  url: "https://alexjoeldelgado.github.io/veg-head/",
  dscr: "A web application designed for Vegetarians to search for local vegetarian-friendly restaurants and vegetarian recipes."
},{
  name: "Weather Dashboard",
  screenshot: "./assets/images/WD-ss.PNG",
  url: "https://alexjoeldelgado.github.io/WeatherDashboard/",
  dscr: "A web application designed to display current and future weather conditions for any given city."
},{
  name: "Work Day Planner",
  screenshot: "./assets/images/WDP-ss.PNG",
  url: "https://alexjoeldelgado.github.io/WorkDayPlanner/",
  dscr: "A web application designed to store a Daily To-Do list and show past, present, and future events."
},{
  name: "Multiple Choice Quiz",
  screenshot: "./assets/images/CQ-ss.PNG",
  url: "https://alexjoeldelgado.github.io/CodeQuiz/",
  dscr: "A dynamically created Multiple Choice Quiz with a Timer and Scoreboard."
},{
  name: "Password Generator",
  screenshot: "./assets/images/PG-ss.PNG",
  url: "https://alexjoeldelgado.github.io/PasswordGenerator/",
  dscr: "A web application designed to generate a password with set parameters."
}]

portfolioObjects.forEach(object => {
  let portfolioButtons = $(`<div class='wrapper col m6 s12 card small center' id='portfolioCard'><img id='portfolioImage'class='activator' src=${object.screenshot}><div class='card-content portfolioCtnt'><div class='card-title activator grey-text text-darken-4'>${object.name}<i class='material-icons right'>more_vert</i></div></div><div class='card-reveal'><div class='card-title grey-text text-darken-4'>${object.name}<i class='material-icons right'>close</i></div><h6>Description:</h6><p>${object.dscr}</p><a href=${object.url} target='_blank'>Link to Project</a></p></div></div>`)
  $("#portfolioContents").append(portfolioButtons);
});