// import '../../assets/scss/reset.scss';
// import './board.scss';
import * as firebase from 'firebase';
import { fabric } from 'fabric';

const config = {
  apiKey: "AIzaSyD9Nfe2MWr3HuCSk3y2JYELN3od7g7DEE8",
  authDomain: "canvas-7be6c.firebaseapp.com",
  databaseURL: "https://canvas-7be6c.firebaseio.com",
  projectId: "canvas-7be6c",
  storageBucket: "canvas-7be6c.appspot.com",
  messagingSenderId: "26516724149"
};

firebase.initializeApp(config);

class Board {
  private database = firebase.database();
  private btnAddText: Element | null;
  private btnConvertObject: Element | null;
  private fabricCanvas: fabric.Canvas;
  private btnSave: Element | null;
  private btnLoad: Element | null;
  private savedCanvas;

  constructor() {


    this.fabricCanvas = new fabric.Canvas('canvas_board');

    this.fabricCanvas.setWidth(window.innerWidth);
    this.fabricCanvas.setHeight(window.innerHeight);

    this.cacheElement();
    this.attachEvent();
  }

  private cacheElement() {
    this.btnAddText = document.querySelector('.btn__add-text');
    this.btnConvertObject = document.querySelector('.btn__to-object');
    this.btnSave = document.querySelector('.btn_save');
    this.btnLoad = document.querySelector('.btn_load');
  }

  private attachEvent() {
    // console.dir(fabric);
    this.btnAddText.addEventListener('click', () => this.onClickAddText());
    this.btnConvertObject.addEventListener('click', () => this.onClickConvertCanvas());
    this.btnSave.addEventListener('click', () => this.onSaveCanvas());
    this.btnLoad.addEventListener('click', () => this.onLoadCanvas());

    const canvasRef = firebase.database().ref('test');
    canvasRef.on('value', (snapshot) => {
      this.fabricCanvas.loadFromJSON(snapshot.val());
    });
  }

  private onClickAddText() {
    const text = new fabric.Textbox('Lorem Ipsum', {
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fontSize: 10
    });

    this.fabricCanvas.add(text);

  }

  private onClickConvertCanvas() {

  }

  private onSaveCanvas() {
    // console.log(this.fabricCanvas.toJSON());
    this.database.ref('test')
      .set(this.fabricCanvas.toJSON());
    // debugger;
  }

  private onLoadCanvas() {
    // this.fabricCanvas.loadFromJSON(this.savedCanvas);

    const canvasRef = firebase.database().ref('test');
    canvasRef.once('value', (snapshot) => {
      debugger;
      this.fabricCanvas.loadFromJSON(snapshot.val());
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const oBoard = new Board();
});