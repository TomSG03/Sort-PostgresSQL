
class Showall {
  constructor(doc, addr) {
    this.addr = addr;

    this.btnDelete = doc.getElementById('btnDelete');
    this.chkAll = doc.getElementById('delAll')
    this.deltResult = doc.getElementById('result');
    this.rows = document.querySelectorAll('tbody > tr > td > input');

    this.arrDelete = [];
    
    this.btnDelete.addEventListener('click', this.clickDelete.bind(this));
    this.chkAll.addEventListener('click', this.clickChkAll.bind(this));
    this.rows.forEach(e => e.addEventListener('click', this.clickChkOne.bind(this)))

    this.db = new DbConnector(addr);
  }


  clickChkAll(e) {
    if (this.chkAll.checked) {
      this.rows.forEach(e => e.checked = true)
    } else { this.rows.forEach(e => e.checked = false) }
  }

  clickChkOne(e) {
    if (this.chkAll.checked) { 
      this.chkAll.checked = false 
    }    
  }

  clickDelete(e) {
    e.preventDefault();
    if (this.checkInput() === true) {
      console.log(this.arrDelete);
      // this.db.sendDelete(this.arrDelete, this.message.bind(this));
    } else {
      this.message('Ничего не выбрано');
    }
  }

  message(data) {
    this.deltResult.innerText = data;
    setTimeout(() => this.deltResult.innerText = 'Можно выбрать и удалить', 2000)
  }

  checkInput() {
    this.arrDelete = [];
    this.rows.forEach(e => {
      if (e.checked) this.arrDelete.push(e.dataset.id)}
      )
    const result = this.arrDelete.length > 0 ? true : false;  
    return result;
  }
}

new Showall(document, 'http://localhost:3000');
