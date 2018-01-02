import * as firebase from 'firebase';

class App {
  constructor() {
    console.log(firebase);

    const hello = () => {
      return "Hello World!";
    };

    const main = document.getElementById("js-main");

    if ( main ) {
      main.textContent = hello();
      console.log('tester');
    }
  }

  public drawCanvas() {
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const oApp = new App();
});