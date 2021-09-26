

function onStartup(){
  var name = prompt("What's your name?");
  var status = prompt("Hello " + name + ", how are you doing today?");
  var date = new Date();
  var test =("Today is " + date.toDateString() + ", and the time is: " + date.getHours() + ":" + date.getMinutes() + "<br>" + "The Mink Limited welcomes you, " + name + "<br>" + "We're glad you are doing " + status);

  document.getElementById("intro").innerHTML = (test);
}


window.addEventListener("load",function(){
  onStartup();

  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var button4 = document.getElementById("button4");
  var button5 = document.getElementById("button5");

  button1.onclick = function(){
    var interested = prompt("What would you like to learn about our company? Choose from the following : Sales, Jobs, Glasses");
    if(interested == "Sales"){
      alert("We currently have made over 180,000 sales. Majority of these sales were thanks to our most popular product, the mink glasses.");
    }
    else if(interested == "Jobs"){
      alert("We currently offer many roles from business to engineering. We're also looking for interns for Summer 2022.");
    }
    else if(interested == "Glasses"){
      alert("The mink glasses are our most popular product. These glasses allow us to be in sync with technology at all times. These glasses have opened up many new creative ideas. A popular idea was REAL LIFE gaming through these glasses");
    }
    else{
      alert("You did not choose from the following options provided to you.");
    }
  }

  button2.onclick = function(){
    var num1 = prompt("Enter a number!");
    var num2 = prompt("Enter another number!");
    var result = parseInt(num1) + parseInt(num2);
    alert("The sum between these 2 numbers is " + result);
  }


  button3.onclick = function(){
    var age = prompt("How old are you?");
    if (parseInt(age) >= 18){
      alert("You are ELIGIBLE to test our mink glasses!")
    }
    else{
      alert("You're too young. You must be 18 or older.")
    }
  }

  button4.onclick = function(){
    var money = prompt("How much is the total of all your items?");
    money = parseInt(money);
    money+= ((money/100)*10);
    alert("Your total price after taxes is $" + money);

  }

  button5.onclick = function(){
    var money = prompt("How much were your items worth originally with taxes");
    money = parseInt(money);
    money -= ((money/100)*50);
    alert("The amount you can receive back is $ " + money);
  }

})
