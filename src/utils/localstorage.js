export default class Localstorage {
  constructor(key) {
    this.key = key;
  }

  saveData(someData) {
    if (someData !== '') {
      localStorage.setItem(this.key, JSON.stringify(someData));
    }
  }

  restoreData() {
    let dataOut = '';
    if (localStorage.getItem(this.key)) {
      dataOut = JSON.parse(localStorage.getItem(this.key));
    } else {
      dataOut = false;
    }
    return dataOut;
  }
}
