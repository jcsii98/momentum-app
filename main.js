// get references to input fields and forms
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

    const name = nameInput.value;
    const email = emailInput.value;
    
    // show welcome page

    const welcomePage = document.getElementById("welcome-page");
    welcomePage.classList.remove("hidden");
})