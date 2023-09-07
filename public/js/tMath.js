class tMath {

  static bubbleSort(step, arrSort, type) {
    if (step < arrSort.length) {
      for (let j = 0; j < arrSort.length; j++) {
        if (type === '1' && arrSort[j] > arrSort[j + 1]) {
          this.numChange(j, arrSort)
        } else if (type === '0' && arrSort[j] < arrSort[j + 1]) {
          this.numChange(j, arrSort)
        }
      }
      this.bubbleSort(step + 1, arrSort, type);
    }
  }
  
  static numChange(j, arrSort) {
    const tmp = arrSort[j];
    arrSort[j] = arrSort[j + 1];
    arrSort[j + 1] = tmp;
  }
}

