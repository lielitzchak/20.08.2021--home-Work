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
  Patient.push(newObject);
  console.log(Patient);
};
var Patient = [];
// exeresie 3

function name(array, idNewUser) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == idNewUser) {
      return true;
    }
  }
  return false;
}
