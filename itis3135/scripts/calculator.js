//Startup method
function onStartup(){
  var number = prompt("Enter a number");
  var job = prompt("Enter an operation. For example +,-,*,/");
  var secondNumber = prompt("Enter a second number");
  var answer = 0;

  if (job == "+"){
    answer = parseInt(number) + parseInt(secondNumber);
  }
  else if (job == "-") {
    answer = parseInt(number) - parseInt(secondNumber);
  }
  else if (job=="*") {
    answer = parseInt(number) * parseInt(secondNumber);
  }
  else if (job=="/") {
    answer = parseInt(number) / parseInt(secondNumber);
  }

  document.getElementById("intro").innerHTML = ("The answer to the problem " + number + job + secondNumber + " is : "+ answer);
}

//When website is opened it executes the onStartup method
window.addEventListener("load",function(){
  onStartup();
})
