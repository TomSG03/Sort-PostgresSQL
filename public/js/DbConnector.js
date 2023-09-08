class DbConnector {
  constructor(path = 'http://localhost:3000', arrSort = []) {
    this.path = path;
    this.arrSort = arrSort;
    this.api = '/api/';
  }

  sendSort(arrSort, callBack) {
    const newPost = {
      numbers: arrSort
    }
    fetch(this.path + this.api, {
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
        callBack(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  sendDelete(arr, callBack) {
    const newPost = {
      numbers: arr
    }
    fetch(this.path + this.api, {
      method: 'DELETE',
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
        callBack(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  sendFind(id, callBack) {
    fetch(this.path + this.api + `${id}`, {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error occurred!')
        }
        return response.json()
      })
      .then((data) => {
        callBack(data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  
}