let tempInput = document.getElementById("temp-input");
let unitRadios = document.getElementsByName("unit");
let convertBtn = document.getElementById("convert-btn");
let convertedTemp = document.getElementById("converted-temp");

convertBtn.addEventListener("click", function () {
  let tempValue = parseFloat(tempInput.value);
  let selectedUnit = "";
  for (let i = 0; i < unitRadios.length; i++) {
    if (unitRadios[i].checked) {
      selectedUnit = unitRadios[i].value;
      break;
    }
  }
  let convertedValue = convertTemp(tempValue, selectedUnit);
  convertedTemp.textContent = convertedValue;
});

function convertTemp(temp, unit) {
  if (unit === "C") {
    return (temp * 9) / 5 + 32 + "°F";
  } else if (unit == "F") {
    return (temp - 32) * (5 / 9) + "°c";
  } else if (unit == "K") {
    return temp + 273.15 + "°c";
  }
}
