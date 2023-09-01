let arrSort = [];
const stringFind = document.getElementById('numberSort');
const btnFind = document.getElementById('btnFind');
const sortFind = document.getElementById('result');

btnFind.addEventListener("click", clickFInd);

function clickFInd(e) {
  e.preventDefault();
  sortFind.innerText = 'Результат поиска - пока ничего нет';
  if (checkInput() === true) {
    sendFind(+stringFind.value);
  }
}

function checkInput() {
  let result = true;
  if (stringFind.value === '' || !/^[0-9]+$/.test(stringFind.value)) {
    result = false
    stringFind.classList.toggle('alertColor');
    setTimeout(() => stringFind.classList.toggle('alertColor'), 1000)
  }
  return result;
}

function sendFind(id) {
  const newPost = {
    numbers : arrSort
  }
  fetch(`http://localhost:3000/api/${id}`, {
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

      sortFind.innerText = data.id === -1 ? 'Ничего не найдено' : data.arrSort.join(' ');
    })
    .catch((err) => {
      console.log(err)
    })
}

