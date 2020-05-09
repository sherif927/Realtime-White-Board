import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard-screen',
  templateUrl: './whiteboard-screen.component.html',
  styleUrls: ['./whiteboard-screen.component.css']
})
export class WhiteboardScreenComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas')
  myCanvas: ElementRef<HTMLCanvasElement>;
  colors: string[] = ['#ecf0f1', '#c0392b', '#e67e22', '#f1c40f', '#27ae60', '#2980b9', '#8e44ad'];
  selectedColor: number = 0;
  painting: boolean = false;
  eraser: boolean = false;
  strokeWidth: number = 2;
  strokeColor: string = this.colors[this.selectedColor];
  lineStyle: CanvasLineCap = 'round';
  ctx: CanvasRenderingContext2D;
  undoHistory: any[] = [];


  constructor() { }

  ngOnInit(): void { }

  /**
   * initialize the canvas context obj
   * and setup the event handlers
   *
   * @memberof WhiteboardScreenComponent
   */
  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    this.resizeCanvas();
    this.myCanvas.nativeElement.addEventListener('mousedown', this.startPainting);
    this.myCanvas.nativeElement.addEventListener('mouseup', this.finishPainting);
    this.myCanvas.nativeElement.addEventListener('mousemove', this.draw);
  }

  /**
   * select/unselect the eraser
   *
   * @memberof WhiteboardScreenComponent
   */
  toggleEraser(): void {
    this.eraser = !this.eraser;
  }

  /**
   * methods passed for the event-handler
   * are passed as arrow functions to avoid
   * conflicts over the 'this' keyword.
   *
   * @memberof WhiteboardScreenComponent
   */
  startPainting = (e) => {
    this.painting = true;

    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX, e.clientY);
  }

  /**
   * when the user lifts the mouse up
   * the current state of the canvas is
   * saved onto a stack to be later used
   * in the UNDO feature.
   *
   * @memberof WhiteboardScreenComponent
   */
  finishPainting = (e) => {
    let src = this.myCanvas.nativeElement.toDataURL("image/png");
    this.undoHistory.push(src);
    this.ctx.closePath();
    this.painting = false;
  }

  /**
   * this method is called when the mouse
   * is dragged , it checks whether the user
   * is selecting the eraser of just the normal
   * pen and draws accordingly.
   *
   * @memberof WhiteboardScreenComponent
   */
  draw = (e) => {
    if (!this.painting) return;
    if (this.eraser)
      this.setEraserProperties();
    else
      this.setProperties();
    this.ctx.lineTo(e.clientX, e.clientY);
    this.ctx.stroke();
  }

  /**
   * sets the properties of the pen
   * such as pen width , color and style.
   *
   * @memberof WhiteboardScreenComponent
   */
  setProperties(): void {
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.lineCap = this.lineStyle;
    this.ctx.strokeStyle = this.strokeColor;
  }

  /**
   * sets some static properties to mimic
   * the effect of an eraser. 
   *
   * @memberof WhiteboardScreenComponent
   */
  setEraserProperties(): void {
    this.ctx.lineWidth = 20;
    this.ctx.lineCap = this.lineStyle;
    this.ctx.strokeStyle = 'black';
  }

  resizeCanvas(): void {
    this.myCanvas.nativeElement.width = window.innerWidth;
    this.myCanvas.nativeElement.height = window.innerHeight;
  }

  /**
   * decrements the value of the pen's width
   * but makes sure it's always bigger than 1
   *
   * @memberof WhiteboardScreenComponent
   */
  decrementRadius(): void {
    this.strokeWidth -= (this.strokeWidth > 1) ? 1 : 0;
  }

  /**
   * increments the value of the pen's width
   * but makes sure it's never bigger than 25
   *
   * @memberof WhiteboardScreenComponent
   */
  incrementRadius(): void {
    this.strokeWidth += (this.strokeWidth < 25) ? 1 : 0;
  }

  /**
   * selects the color and if the eraser
   * is selected it unselects it.
   *
   * @param {number} index
   * @memberof WhiteboardScreenComponent
   */
  selectColor(index: number): void {
    if (this.eraser) this.eraser = false;
    this.selectedColor = index;
    this.strokeColor = this.colors[this.selectedColor];
  }

  /**
   * if the dimensions of the canvas are
   * changed, then it's re-created
   *
   * @memberof WhiteboardScreenComponent
   */
  clearScreen(): void {
    this.myCanvas.nativeElement.width = window.innerWidth;
  }

  /**
   * fetches the last saved state
   * of the canvas from the history
   * and renders it to the screen.
   *
   * @memberof WhiteboardScreenComponent
   */
  undo(): void {
    if (this.undoHistory.length > 0) {
      let image = new Image();
      image.onload = () => this.ctx.drawImage(image, 0, 0);
      image.src = this.undoHistory.pop();
    }
  }
}
