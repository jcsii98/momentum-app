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

// change name and stay logged out
const changeName = document.getElementById("change-name");
const stayLoggedOut = document.getElementById("stay-logged-out");

changeName.addEventListener('click', (event) => {
  //prevent refresh
  event.preventDefault();
  // go back to name input
  nameFormPage.classList.remove('hidden');
  emailFormPage.classList.add('hidden');
  nameInput.value = "";
})

stayLoggedOut.addEventListener('click', (event) => {
  //prevent refresh
  event.preventDefault();
  //proceed to welcome page
  const welcomePage = document.getElementById("welcome-page");
  welcomePage.classList.remove('hidden');
  emailFormPage.classList.add('hidden');
})

// add event listener to email form

emailForm.addEventListener("submit", (event) => {
    //prevent refresh
    event.preventDefault();

    // hide email page
    emailFormPage.classList.add("hidden");

    // get the users name and email

    
    // show welcome page

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

    let is12Hour = is12HourFormat();

    function getTime() {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        hour12: is12Hour,
        hour: 'numeric',
        minute: 'numeric',
      });
      return formatter.format(date);
    }

    function is12HourFormat() {
      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric'
      });
      const timeString = formatter.format(new Date());
      return timeString.indexOf() > -1 || timeString.indexOf() > -1;
    }

    function displayTime() {
      const time = getTime();
      const timeEl = document.getElementById('time');
      timeEl.textContent = time;
    }

    function toggleFormat() {
      is12Hour = !is12Hour;
    }

    setInterval(displayTime, 1000);


// quotes API

// Define quote dom

const quote = document.querySelector("blockquote p");
const cite = document.querySelector("blockquote cite");

// Define a function to fetch the quote
  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = `"${data.content}"`;
      cite.textContent = `- ${data.author}`;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  };

  updateQuote();

  setInterval(updateQuote, 60000);