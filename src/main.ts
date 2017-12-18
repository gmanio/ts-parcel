import About from './components/about';

declare var window;

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

    const oAbout = new About();
    oAbout.attachEvent();

    this.getDatas();
  }

  public getDatas() {
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
  window.oApp = new App();
});