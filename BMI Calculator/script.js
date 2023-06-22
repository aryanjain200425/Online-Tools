const calculateButton = document.getElementById('calculateButton');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', calculateBMI);

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert height to meters
  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(2);
  let resultText = '';

  if (isNaN(bmi)) {
    resultText = 'Please enter valid values for weight and height.';
  } else if (bmi < 18.5) {
    resultText = `Your BMI is ${roundedBMI}. You are underweight.`;
  } else if (bmi >= 18.5 && bmi < 25) {
    resultText = `Your BMI is ${roundedBMI}. You have a normal weight.`;
  } else if (bmi >= 25 && bmi < 30) {
    resultText = `Your BMI is ${roundedBMI}. You are overweight.`;
  } else {
    resultText = `Your BMI is ${roundedBMI}. You are obese.`;
  }

  resultDiv.textContent = resultText;
}
