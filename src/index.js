// Елементи DOM
const messageElement = document.getElementById('message');
const keyElement = document.getElementById('key');
const newGameButton = document.getElementById('new-game');

// Масив клавіш
const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'W'];

// Змінні
let currentKeyIndex;

// Функція для встановлення нової поточної клавіші
function setNewCurrentKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
}

// Обробник події keydown
document.addEventListener('keydown', function(event) {
  const pressedKey = event.key.toUpperCase();
  
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    messageElement.textContent = 'Правильна клавіша!';
    setNewCurrentKey();
  } else {
    messageElement.textContent = 'Неправильна клавіша!';
  }
});

// Обробник події keypress
document.addEventListener('keypress', function(event) {
  event.preventDefault();
});

// Обробник події click для кнопки "Нова гра"
newGameButton.addEventListener('click', function() {
  setNewCurrentKey();
  messageElement.textContent = '';
});

// Ініціалізація гри
setNewCurrentKey();
