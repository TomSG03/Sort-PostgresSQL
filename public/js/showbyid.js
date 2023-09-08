class ShowById {
  constructor(doc) {
    this.stringFind = doc.getElementById('numberSort');
    this.btnFind = doc.getElementById('btnFind');
    this.sortFind = doc.getElementById('result');

    this.btnFind.addEventListener("click", this.clickFind.bind(this));

    this.arrSort = [];
    this.db = new DbConnector();

  }
  clickFind(e) {
    e.preventDefault();
    this.sortFind.innerText = 'Результат поиска - пока ничего нет';
    if (this.checkInput() === true) {
      this.db.sendFind(+this.stringFind.value, this.message.bind(this));
    }
  }
  
  checkInput() {
    let result = true;
    if (!/^[0-9]+$/.test(this.stringFind.value)) {
      result = false
      this.stringFind.classList.toggle('alertColor');
      setTimeout(() => this.stringFind.classList.toggle('alertColor'), 1000)
    }
    return result;
  }
  
  message(data) {
    this.sortFind.innerText = data.id === -1 ? 'Ничего не найдено' : data.arrSort.join(' ');
  }
}

new ShowById(document);
