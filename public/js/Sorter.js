
class Sorter {
  constructor(doc, addr) {
    this.addr = addr;

    this.stringSort = doc.getElementById('numberSort');
    this.btnSort = doc.getElementById('btnSort');
    this.btnSave = doc.getElementById('btnSave');
    this.btnType = doc.getElementById('btnType')
    this.sortResult = doc.getElementById('result');

    this.arrSort = [];

    this.btnSort.addEventListener("click", this.clickSort.bind(this));
    this.btnSave.addEventListener("click", this.clickSave.bind(this));
    this.btnType.addEventListener("click", this.clickType.bind(this));

    this.db = new DbConnector(addr);
  }


  clickType(e) {
    e.preventDefault();
    if (this.btnType.dataset.type === '1') {
      this.btnType.dataset.type = '0';
      this.btnType.textContent = 'По убыванию';
    } else {
      this.btnType.dataset.type = '1';
      this.btnType.textContent = 'По возрастанию';
    }
  }

  clickSort(e) {
    e.preventDefault();
    if (this.checkInput() === true) {
      this.arrSort = this.stringSort.value.split(' ').map(Number);
      tMath.bubbleSort(1, this.arrSort, this.btnType.dataset.type);
      this.sortResult.innerText = this.arrSort.join(' ');
    }
  }

  clickSave(e) {
    e.preventDefault();
    if (this.checkInput() === true) {
      this.db.sortSend(this.arrSort, this.message.bind(this));
    }
  }

  message(data) {
    this.sortResult.innerText = data;
    setTimeout(() => this.sortResult.innerText = 'Результат сортировки - пока ничего нет', 2000)
  }

  checkInput() {
    let result = true;
    if (this.stringSort.value === '' || !/^[-0-9.' ']+$/.test(this.stringSort.value)) {
      result = false
      this.stringSort.classList.toggle('alertColor');
      setTimeout(() => stringSort.classList.toggle('alertColor'), 1000)
    }
    return result;
  }

  // sortSend() {
  //   const newPost = {
  //     numbers: this.arrSort
  //   }
  //   fetch(this.addr + '/api', {
  //     method: 'POST',
  //     body: JSON.stringify(newPost), // Тело запроса в JSON-формате
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Error occurred!')
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       this.sortResult.innerText = data;
  //       setTimeout(() => this.sortResult.innerText = 'Результат сортировки - пока ничего нет', 2000)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
}

