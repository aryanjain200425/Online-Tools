const generateButton = document.getElementById('generateButton');
const passwordInput = document.getElementById('passwordInput');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+';
const passwordLength = 12;

generateButton.addEventListener('click', generatePassword);

function generatePassword() {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  passwordInput.value = password;
}
