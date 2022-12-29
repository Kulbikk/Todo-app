const button = document.getElementById('button');
const addText = document.getElementById('add-text');
const addText2 = document.getElementById('add-text2');
const addText3 = document.getElementById('add-text3');
const addText4 = document.getElementById('add-text4');
const addText5 = document.getElementById('add-text5');

const trash1 = document.getElementById('trash1');
const trash2 = document.getElementById('trash2');
const trash3 = document.getElementById('trash3');
const trash4 = document.getElementById('trash4');
const trash5 = document.getElementById('trash5');

const inputField = document.getElementById('inputt');

button.addEventListener('click', () => {
  if (addText.textContent === '') {
    addText.textContent = inputField.value;
    trash1.style.display = 'block';
  } else if (addText2.textContent === '') {
    addText2.textContent = inputField.value;
    trash2.style.display = 'block';
  } else if (addText3.textContent === '') {
    addText3.textContent = inputField.value;
    trash3.style.display = 'block';
  } else if (addText4.textContent === '') {
    addText4.textContent = inputField.value;
    trash4.style.display = 'block';
  } else if (addText5.textContent === '') {
    addText5.textContent = inputField.value;
    trash5.style.display = 'block';
  }
  inputField.value = '';
});
