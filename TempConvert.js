function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  let outputTemp;

  if (inputUnit === "celsius") {
    if (outputUnit === "fahrenheit") {
      outputTemp = (inputTemp * 9) / 5 + 32;
    } else if (outputUnit === "kelvin") {
      outputTemp = inputTemp + 273.15;
    } else {
      outputTemp = inputTemp;
    }
  } else if (inputUnit === "fahrenheit") {
    if (outputUnit === "celsius") {
      outputTemp = ((inputTemp - 32) * 5) / 9;
    } else if (outputUnit === "kelvin") {
      outputTemp = ((inputTemp - 32) * 5) / 9 + 273.15;
    } else {
      outputTemp = inputTemp;
    }
  } else if (inputUnit === "kelvin") {
    if (outputUnit === "celsius") {
      outputTemp = inputTemp - 273.15;
    } else if (outputUnit === "fahrenheit") {
      outputTemp = ((inputTemp - 273.15) * 9) / 5 + 32;
    } else {
      outputTemp = inputTemp;
    }
  }

  document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}
