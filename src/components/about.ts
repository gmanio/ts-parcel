import './about.scss';

export default class About {
  constructor() {
  }

  public attachEvent() {
    document.addEventListener('click', () => {
      console.log('test');
    });
  }
}