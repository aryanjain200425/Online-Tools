const numberDropdown = document.getElementById('numberDropdown');
const generateButton = document.getElementById('generateButton');
const passwordInput = document.getElementById('passwordInput');

generateButton.addEventListener('click', generatePassword);

function generatePassword() {
  const selectedNumber = parseInt(numberDropdown.value);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+';
  let password = '';
  
  for (let i = 0; i < selectedNumber; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  passwordInput.value = password;
}
