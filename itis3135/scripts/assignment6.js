//Validates that the number is betwen 0 and 10 and also accepts negatives
function validateEntry(entry){
  if(entry >= -10 && entry <= 10){
    return true;
  }
  else{
    return false;
  }
}

//Gets shape based on number user inputted. If number was between -10 and 10 it then rounds it and gets the absolute value to calculate the polygon
function getShape(num){
  if (validateEntry(num)){
    num = Math.round(Math.abs(num));
    if(num == 0){
      return "Test";
    }
    else if(num == 1){
      return "Henagon";
    }
    else if(num == 2){
      return "Digon";
    }
    else if(num == 3){
      return "Trigon";
    }
    else if(num == 4){
      return "Tetragon";
    }
    else if(num == 5){
      return "Pentagon";
    }
    else if(num == 6){
      return "Hexagon";
    }
    else if(num == 7){
      return "Heptagon";
    }
    else if(num == 8){
      return "Octagon";
    }
    else if(num == 9){
      return "Enneagon";
    }
    else if(num == 10){
      return "Decagon";
    }
  }
  else{
    alert("The number entered wasn't between -10 and 10");
  }
}

//Startup method
function onStartup(){
  var number = prompt("Lets play a game! Enter a number -10 and 10 and I will tell you the corresponding polygon!");
  var shape = getShape(number);
  document.getElementById("intro").innerHTML = ("The corresponding polygon is a " + shape);
}

//When website is opened it executes the onStartup method
window.addEventListener("load",function(){
  onStartup();
})
