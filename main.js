//   exeresie 1
var formOne = document.getElementById("formOne");

formOne.onsubmit = function (event) {
  event.preventDefault();

  var inputFName = document.getElementById("inputFName").value,
    inputlName = document.getElementById("inputlName").value,
    inputBDay = document.getElementById("inputBDay").value,
    inputId = document.getElementById("inputId").value,
    inputCity = document.getElementById("inputCity").value;
  var newObject = {
    Name: inputFName,
    lastName: inputlName,
    birthDay: inputBDay,
    id: inputId,
    city: inputCity,
    //   exeresie 2
    examDate: new Date(),
  };
  if (checkId(Patient, inputId)) {
    alert("already exist..");
  } else {
    Patient.push(newObject);
  }
  console.log(Patient);
  displayData(Patient);
};
var Patient = [];

// exeresie 3

function checkId(array, idNewUser) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == idNewUser) {
      return true;
    }
  }
  return false;
}
// exeresie 4

function displayData(myArray) {
  var p = document.getElementById("para");
  p.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    // exeresie 5
    p.innerHTML += `name: "${myArray[i].Name}" ,last name: "${myArray[i].lastName}" ,birth-day: "${myArray[i].birthDay}" , id: "${myArray[i].id}", city: "${myArray[i].city}"<br>`;
  }
} // exeresie 6

oninput = function () {
  document.getElementById("inputFName").value = document
    .getElementById("inputFName")
    .value.toUpperCase();
  document.getElementById("inputlName").value = document
    .getElementById("inputlName")
    .value.toUpperCase();
  document.getElementById("inputBDay").value = document
    .getElementById("inputBDay")
    .value.toUpperCase();
  document.getElementById("inputId").value = document
    .getElementById("inputId")
    .value.toUpperCase();
  document.getElementById("inputCity").value = document
    .getElementById("inputCity")
    .value.toUpperCase();
};
// exeresie 7
// exeresie 7 a
var Search = document.getElementById("Search").value,
  forSearch = document.getElementById("forSearch");
//! exeresie 7 b

var Searchbtn = document.getElementById("Search");

Searchbtn.onclick = function () {
  for (let i = 0; i < Patient.length; i++) {
    if (Search == Patient[i].Name) {
      forSearch.innerHTML = Patient[i];
    } else {
      return (forSearch.innerHTML = "The patient was not found ");
    }
  }
  Searchbtn.onclick = function () {
    for (let i = 0; i < Patient.length; i++) {
      if (Search == Patient[i].id) {
        forSearch.innerHTML = Patient[i];
      } else {
        return (forSearch.innerHTML = "The id's patient was not found ");
      }
    }
  };
};
