import './assets/scss/reset.scss';

class App {
  constructor() {
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

    // fetch('https://www.googleapis.com/youtube/v3/playlistItems',
    //   { method: 'GET',
    //     mode: 'cors',
    //     cache: 'default' })
    //   .then((data) => {
    //     debugger;
    //   })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const oApp = new App();
});