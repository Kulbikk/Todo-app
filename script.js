const button = document.getElementById('button');
const addText = document.getElementById('add-text');
const addText2 = document.getElementById('add-text2');
const addText3 = document.getElementById('add-text3');
const addText4 = document.getElementById('add-text4');
const addText5 = document.getElementById('add-text5');


const inputField = document.getElementById('inputt');

button.addEventListener('click', () => {
  if (addText.textContent === '') {
    addText.textContent = inputField.value;
  } else if (addText2.textContent === '') {
    addText2.textContent = inputField.value;
  } else if (addText3.textContent === '') {
    addText3.textContent = inputField.value;
  } else if (addText4.textContent === '') {
    addText4.textContent = inputField.value;
  } else if (addText5.textContent === '') {
    addText5.textContent = inputField.value;
  }
  inputField.value = '';
});


addText.addEventListener('click', () => {
  addText.textContent = '';
})

addText2.addEventListener('click', () => {
  addText2.textContent = '';
})

addText3.addEventListener('click', () => {
  addText3.textContent = '';
})

addText4.addEventListener('click', () => {
  addText4.textContent = '';
})

addText5.addEventListener('click', () => {
  addText5.textContent = '';
})