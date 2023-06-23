const convertButton = document.getElementById('convertButton');
const inputValue = document.getElementById('inputValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', convertUnits);

function convertUnits() {
  const value = parseFloat(inputValue.value);
  const selectedFromUnit = fromUnit.value;
  const selectedToUnit = toUnit.value;
  let convertedValue = 0;

  if (selectedFromUnit === selectedToUnit) {
    convertedValue = value;
  } else if (selectedFromUnit === 'm' && selectedToUnit === 'cm') {
    convertedValue = value * 100;
  } else if (selectedFromUnit === 'cm' && selectedToUnit === 'm') {
    convertedValue = value / 100;
  } else if (selectedFromUnit === 'ft' && selectedToUnit === 'm') {
    convertedValue = value * 0.3048;
  } else if (selectedFromUnit === 'm' && selectedToUnit === 'ft') {
    convertedValue = value / 0.3048;
  } else if (selectedFromUnit === 'ft' && selectedToUnit === 'cm'){
    convertedValue = value * 30.48;
  } else if (selectedFromUnit === 'cm' && selectedToUnit === 'ft'){
    convertedValue = value / 30.48;
  }
  
  // Add more conversion cases as needed

  const roundedValue = convertedValue.toFixed(2);
  resultDiv.textContent = `${value} ${selectedFromUnit} is equal to ${roundedValue} ${selectedToUnit}`;
}
