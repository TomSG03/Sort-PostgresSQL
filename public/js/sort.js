let arrSort = [];

const stringSort = document.getElementById('numberSort');
const btnSort = document.getElementById('btnSort');
const btnSave = document.getElementById('btnSave');
const btnType = document.getElementById('btnType')
const sortResult = document.getElementById('result');

btnSort.addEventListener("click", clickSort);
btnSave.addEventListener("click", clickSave);
btnType.addEventListener("click", clickType);


function clickType(e) {
  e.preventDefault();
  if (btnType.dataset.type === '1') {
    btnType.dataset.type = '0';
    btnType.textContent = 'По убыванию';
  } else {
    btnType.dataset.type = '1';
    btnType.textContent = 'По возрастанию';
  }
}

function clickSort(e) {
  e.preventDefault();
  if (checkInput() === true) {
    arrSort = stringSort.value.split(' ').map(Number);
    bubbleSort(1);
    sortResult.innerText = arrSort.join(' ');
  }
}

function clickSave(e) {
  e.preventDefault();
  if (checkInput() === true) {
    sortSend();
  }
}

function checkInput() {
  let result = true;
  if (stringSort.value === '' || !/^[-0-9.' ']+$/.test(stringSort.value)) {
    result = false
    stringSort.classList.toggle('alertColor');
    setTimeout(() => stringSort.classList.toggle('alertColor'), 1000)
  }
  return result;
}

function bubbleSort(step) {
  if (step < arrSort.length) {
    for (let j = 0; j < arrSort.length; j++) {
      if (btnType.dataset.type === '1' && arrSort[j] > arrSort[j + 1]) {
        numChange(j)
      } else if (btnType.dataset.type === '0' && arrSort[j] < arrSort[j + 1]) {
        numChange(j)
      }
    }
    bubbleSort(step + 1);
  }
}

function numChange(j) {
  const tmp = arrSort[j];
  arrSort[j] = arrSort[j + 1];
  arrSort[j + 1] = tmp;
}

function sortSend() {
  const newPost = {
    numbers : arrSort
  }
  fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify(newPost), // Тело запроса в JSON-формате
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error occurred!')
      }
      return response.json()
    })
    .then((data) => {
      sortResult.innerText = data;
      setTimeout(() => sortResult.innerText = 'Результат сортировки - пока ничего нет', 2000)
    })
    .catch((err) => {
      console.log(err)
    })
}

