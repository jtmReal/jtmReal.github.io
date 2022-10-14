var person = [];
var salary = [];

window.onload=function(){
  document.getElementById("addSalary").onclick = addSalary;
  document.getElementById("displayResults").onclick = displayResults;
  document.getElementById("displaySalary").onclick = displaySalary;

}

function addSalary(){
  var thePerson =   document.getElementById("employee").value;
  var theSalary = document.getElementById("salary").value;

  person.push(thePerson);
  salary.push(theSalary);
}

function displayResults(){
  var totalSalary = 0;
  var avgSalary = 0;
  var highestSalary = 0;
  var thePerson=0;

  for (i=0; i < salary.length;i++){

    totalSalary = totalSalary + parseInt(salary[i]);
    console.log(totalSalary);
  }
  avgSalary = totalSalary/salary.length;

  for(i=0;i<salary.length;i++){
    if(salary[i] >= highestSalary){
      highestSalary=salary[i];
      thePerson = i;
    }
  }

  var text = "<h2>Result:</h2><p>Average Salary = " + avgSalary + "</p>";
  result += "<p>Highest Salary earned by " + person[thePerson] + " with a salary of : " +highestSalary+"</p>";
  document.getElementById("displayResultsText").innerHTML = result;

}

function displaySalary(){
  var text = "<h2>Salary:</h2><tabke><tr><th>Person</th><th>Salaries</th></tr>"
  for(int i =0; i < salaries.length; i++){
    text +
  }
}
