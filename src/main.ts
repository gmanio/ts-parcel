import About from './components/about';

class App {
  public oAbout: About;

  constructor() {
    console.log('testerr');
    this.oAbout = new About();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let oApp = new App();
});