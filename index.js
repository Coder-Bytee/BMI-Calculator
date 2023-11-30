document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculate").addEventListener("click", calculateBMI);
  document.getElementById("feet").addEventListener("input", handleFeetInput);
  document
    .getElementById("inches")
    .addEventListener("input", handleInchesInput);
  document
    .getElementById("pop-up-box")
    .addEventListener("click", handleBackgroundBlur);
  document
    .getElementById("close-btn")
    .addEventListener("click", handleBackgroundBlur);
});
function calculateBMI() {
  var inch = Number(document.getElementById("inches").value);
  var feet = Number(document.getElementById("feet").value);
  var weight = Number(document.getElementById("weight").value);
  if (validateInput(feet, inch, weight)) {
    feet = feet * 12;
    var height = (feet + inch) / 39.37;
    var result = weight / Math.pow(height, 2);
    document.getElementById("result-container").innerHTML = htmlRender(result);
  }
}
function validateInput(feet, inch, weight) {
  if (feet < 4 || feet >= 7) {
    alert("Invalid Value for Feet (Enter the value between 4 and 6) !");
    document.getElementById("feet").focus();
    return false;
  } else if (inch < 0 || inch >= 12) {
    alert("Invalid Value for inches(Enter the value between 0 and 11) !");
    document.getElementById("inches").focus();
    return false;
  } else if (weight < 1 || weight > 200) {
    alert("Invalid Value for Weight (Enter the value between 1 and 200) !");
    document.getElementById("weight").focus();
    return false;
  } else {
    return true;
  }
}
function handleFeetInput() {
  this.value = this.value.replace(/[^0-9]/g, "");
}
function handleInchesInput() {
  this.value = this.value.replace(/[^\d{2}]/g, "");
}
function htmlRender(result) {
  var resultText = "";
  var style = "";
  if (result <= 18.5) {
    resultText = "Underweight";
    style = "rgb(255,205,0)";
  } else if (result > 18.5 && result <= 24.9) {
    resultText = "Normal";
    style = "rgb(0,255,0)";
  } else if (result >= 25 && result <= 29.9) {
    resultText = "Overweight";
    style = "rgb(255,165,0)";
  } else if (result >= 30) {
    resultText = "Obese";
    style = "rgb(255,0,0)";
  }
  return (
    '<h3>Your BMI is</h3><h2 class="result">' +
    result.toFixed(1) +
    '</h2><h2 class="result-text" style="color:' +
    style +
    '">' +
    resultText +
    "</h2>"
  );
}
function handleBackgroundBlur() {
  console.log("Event Triggered");
  document.getElementById("blur").classList.toggle("active");
  document.getElementById("pop-up").classList.toggle("active");
}
