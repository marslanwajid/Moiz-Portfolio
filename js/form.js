const form = document.querySelector(".form"); // assuming your form has a class of "form"
const formSubmit = document.querySelector(".formSubmit");
const formInputAll = document.querySelectorAll(".form input");
const btnSubmit = document.querySelector(".button");

form.method = "post"; // set the form method to post
form.action = "https://formspree.io/f/xayrrnna"; // replace with your Formspree form ID

//set flag so that it alert only once time
let flag = true;

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  //setting back to true so that next time it will check again
  flag = true;
  formInputAll.forEach((item) => {
    formSubmitCheck(item);
  });
  //submiting form after all check pass
  if (flag) {
    formSubmit.submit();
  }
});

function formSubmitCheck(item) {
  if (flag === true) {
    if (item.value.trim() == undefined || item.value.trim() == "") {
      alert("Please provide correct Input");
      flag = false;
    }
  }
}