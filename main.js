// get references to input fields and 
const nameFormPage = document.getElementById("intro-page-1");
const emailFormPage = document.getElementById("intro-page-2");
const nameForm = document.getElementById("intro-form-1");
const emailForm = document.getElementById("intro-form-2");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// add event listener to name form

nameForm.addEventListener("submit", (event) => {
    // prevent refreshing when submitted
    event.preventDefault();

    //hide the nameform
    nameFormPage.classList.add("hidden");

    // show email form
    emailFormPage.classList.remove("hidden");

    // concatenate name into email-greeting 
    
    const name = document.getElementById("name").value;
    let emailString = `What's your email, ${name}?`;
    document.getElementById("email-greeting").innerHTML = emailString;
    
    // set focus to email input field
    emailInput.focus();

});

// add event listener to email form

emailForm.addEventListener("submit", (event) => {
    //prevent refresh
    event.preventDefault();

    // hide email page
    emailFormPage.classList.add("hidden");

    // get the users name and email

    
    // show welcome page

    const welcomePage = document.getElementById("welcome-page");
    welcomePage.classList.remove("hidden");
}) 

// show main-page

const mainPage = document.getElementById("main-page");
const procButton = document.getElementById("proceed-button");
const welcomePage = document.getElementById("welcome-page");
const footer = document.querySelector("#main-footer");

procButton.addEventListener('click', function() {
   
    welcomePage.classList.add("hidden");
    mainPage.classList.remove("hidden");
    footer.classList.remove("hidden");
    // get name for main-page
    const name = document.getElementById("name").value;
    
    // get time for greeting

    let currentTime = new Date();
    let currentHour = currentTime.getHours();      
    
   if (currentHour < 12) {
    document.getElementById("greeting").textContent = `Good morning, ${name}.`;
  } else if (currentHour < 18) {
    document.getElementById("greeting").textContent = `Good afternoon, ${name}.`;
  } else {
    document.getElementById("greeting").textContent = `Good evening, ${name}.`;
  }
})

// time API

  // update time 
  function updateTime() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://worldtimeapi.org/api/timezone/Etc/UTC', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      var datetime = response.utc_datetime;
      var currentTime = new Date(datetime);
      document.getElementById("currentTime").textContent = currentTime.toLocaleTimeString();
    }
  };
  request.send();
}
  setInterval(updateTime, 1000);


