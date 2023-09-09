
class Showall {
  constructor(doc, addr) {
    this.addr = addr;

    this.btnDelete = doc.getElementById('btnDelete');
    this.chkAll = doc.getElementById('delAll')
    this.deltResult = doc.getElementById('result');
    this.rows = doc.querySelectorAll('tbody > tr > td > input');
    this.tableBody = document.getElementById('table');
    console.log(this.tableBody);

    this.arrDelete = [];
    this.result = {};
    
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
      this.db.sendDelete(this.arrDelete, this.message.bind(this));
    } else {
      this.message('Ничего не выбрано');
    }
  }

  message(data) {
    this.result = data;
    this.deltResult.innerText = 'Удалено';
    setTimeout(() => this.deltResult.innerText = 'Можно выбрать и удалить', 2000);
    this.updateList();
  }

  updateList() {
    this.tableBody.innerText = '';

    this.result.forEach((result) => { 
    this.tableBody.innerHTML += ` 
    <tr>
      <td><input type="checkbox" data-id=${result.id} /></td>
      <td>${result.id}</td>
      <td>${result.arrSort.join(' ')}</td>
    </tr>`
    });
    this.rows = document.querySelectorAll('tbody > tr > td > input');
    this.chkAll.checked = false;
  }

  checkInput() {
    this.arrDelete = [];
    this.rows.forEach(e => {
      if (e.checked) {
        this.arrDelete.push(e.dataset.id)
        console.log(e.dataset.id)
      }
    })
    const result = this.arrDelete.length > 0 ? true : false;  
    return result;
  }
}

new Showall(document, 'http://localhost:3000');
