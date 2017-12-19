import About from './components/about';
import { fabric } from 'fabric';

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
    console.log(fabric);
    this.drawCanvas();
  }

  public drawCanvas() {
    const canvas = new fabric.Canvas('canvas');

    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: 'red'
    });

    canvas.add(rect);

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