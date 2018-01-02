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
  private fabricCanvas: fabric.Canvas;
  private btnAddText: Element | null;
  private btnAddImage: HTMLInputElement | null;
  private btnSave: Element | null;
  private btnLoad: Element | null;
  private btnClear: Element | null;
  private btnAddVideo: Element | null;

  constructor() {
    this.fabricCanvas = new fabric.Canvas('canvas_board');
    this.fabricCanvas.setWidth(window.innerWidth);
    this.fabricCanvas.setHeight(window.innerHeight);

    this.cacheElement();
    this.attachEvent();
  }

  private cacheElement() {
    this.btnAddVideo = document.querySelector('.btn_add_video');
    this.btnAddImage = document.querySelector('.btn_add_image');
    this.btnAddText = document.querySelector('.btn__add-text');
    this.btnClear = document.querySelector('.btn_clear');
    this.btnSave = document.querySelector('.btn_save');
    this.btnLoad = document.querySelector('.btn_load');
  }

  private attachEvent() {
    this.btnAddImage.addEventListener('click', () => this.onClickAddImage());
    this.btnAddVideo.addEventListener('click', () => this.onClickAddVideo());
    this.btnAddText.addEventListener('click', () => this.onClickAddText());
    this.btnClear.addEventListener('click', () => this.onClearCanvas());
    this.btnSave.addEventListener('click', () => this.onSaveCanvas());
    this.btnLoad.addEventListener('click', () => this.onLoadCanvas());


    const canvasRef = firebase.database().ref('test');
    canvasRef.on('value', (snapshot) => {
      this.fabricCanvas.loadFromJSON(snapshot.val());
    });

    fabric.util.requestAnimFrame(()=>(this.render()));
  }

  public render(){
    this.fabricCanvas.renderAll();
    fabric.util.requestAnimFrame(()=>(this.render()));
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

  private onClickAddImage() {
    const reader = new FileReader();
    const elImageInput: HTMLInputElement = document.querySelector('#image');

    reader.onload = (e: ProgressEvent) => {
      fabric.Image.fromURL(e.srcElement.result, (img) => {
        img.scaleToWidth(this.fabricCanvas.getWidth());
        this.fabricCanvas.add(img).renderAll();
      })
    }

    reader.readAsDataURL(elImageInput.files[0]);
  }

  private onSaveCanvas() {
    this.database
      .ref('test')
      .set(this.fabricCanvas.toJSON());
  }

  private onLoadCanvas() {
    const canvasRef = firebase.database().ref('test');
    canvasRef.once('value', (snapshot) => {
      this.fabricCanvas.loadFromJSON(snapshot.val());
    });
  }

  private onClearCanvas() {
    this.fabricCanvas.clear();
  }

  private onClickAddVideo() {
    const reader = new FileReader();
    const elImageInput: HTMLInputElement = document.querySelector('#image');
    const elVideo: HTMLVideoElement = document.createElement('video');

    reader.onload = (e: ProgressEvent) => {
      elVideo.src = e.srcElement.result;
      elVideo.loop = true;
      elVideo.play();
      const video = new fabric.Image(elVideo,{
        width: 300,
        height: 300
      });

      this.fabricCanvas.add(video);
      // video.getElement.play();
    }

    reader.readAsDataURL(elImageInput.files[0]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const oBoard = new Board();
});