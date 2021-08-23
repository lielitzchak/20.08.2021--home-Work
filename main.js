//   exeresie 1
var formOne = document.getElementById("formOne");

formOne.onsubmit = function (event) {
  event.preventDefault();

  var inputFName = document.getElementById("inputFName").value,
    inputlName = document.getElementById("inputlName").value,
    inputBDay = document.getElementById("inputBDay").value,
    inputId = document.getElementById("inputId").value,
    inputCity = document.getElementById("inputCity").value,
    btn = document.getElementById("btn").value;
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
  var pher = document.getElementById("phar");
  pher.innerHTML = "";
  for (var i = 0; i < myArray.length; i++) {
    pher.innerHTML += myArray[i].firstName + "<br>";
    pher.innerHTML += myArray[i].LastName;
    pher.innerHTML += myArray[i].YearOfBirth;
  }
}
function displayData(myArray) {
  var p = document.getElementById("para");
  p.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    // exeresie 5
    p.innerHTML += `name: "${myArray[i].Name}" ,last name: "${myArray[i].lastName}" ,birth-day: "${myArray[i].birthDay}" , id: "${myArray[i].id}", city: "${myArray[i].city}"`;
  }

}
// exeresie 6 