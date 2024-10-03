
// Function to handle login form submission
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
})
let email = document.querySelector('input[type="email"]').value;
  let password = document.querySelector('input[type="password"]').value;
// Validate login credentials (you can add your own validation logic here)
  
function myFunction()

{

var un =document.forms["myForm"]["Uname"].value;
var pw =document.forms["myForm"]["Pass"].value;
if (un=="Eddywale398@gmail.com" && pw=="eddy@2005")
{
window.location.href="index.html";
}
else
{

alert("invalid Username and Password");

}
}




    // Redirect to another page or perform other actions
  
// Function to handle signup form submission
document.querySelector('.register a').addEventListener('click', function (event) {
  event.preventDefault();
// Redirect to the signup page
  window.location.href = " file:///C:/Users/Eddywale/Desktop/Katesi/pictures/experiment.html/SignUp.html";
});
// Function to handle returning to the login page after sign up
  document.querySelector('.login a').addEventListener('click', function (event) {
    event.preventDefault();
    // Redirect back to the login page
    window.location.href = "file:///C:/Users/Eddywale/Desktop/Katesi/pictures/experiment.html/experiment.html# ";
  });
