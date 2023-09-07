class DbConnector {
  constructor(path = 'http://localhost:3000', arrSort = []) {
    this.path = path;
    this.arrSort = arrSort;
  }

  sortSend(arrSort, callBack) {
    const newPost = {
      numbers: arrSort
    }
    fetch(this.path + '/api', {
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

}