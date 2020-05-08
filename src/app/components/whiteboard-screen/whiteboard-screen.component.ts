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


  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    this.resizeCanvas();
    this.myCanvas.nativeElement.addEventListener('mousedown', this.startPainting);
    this.myCanvas.nativeElement.addEventListener('mouseup', this.finishPainting);
    this.myCanvas.nativeElement.addEventListener('mousemove', this.draw);
  }

  toggleEraser(): void {
    this.eraser = !this.eraser;
  }

  startPainting = (e) => {
    this.painting = true;
    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX, e.clientY);
  }

  finishPainting = (e) => {
    this.ctx.closePath();
    this.painting = false;
  }

  draw = (e) => {
    if (!this.painting) return;
    if (this.eraser)
      this.setEraserProperties();
    else
      this.setProperties();
    this.ctx.lineTo(e.clientX, e.clientY);
    this.ctx.stroke();
  }

  setProperties(): void {
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.lineCap = this.lineStyle;
    this.ctx.strokeStyle = this.strokeColor;
  }

  setEraserProperties(): void {
    this.ctx.lineWidth = 15;
    this.ctx.lineCap = this.lineStyle;
    this.ctx.strokeStyle = 'black';
  }

  resizeCanvas(): void {
    this.myCanvas.nativeElement.width = window.innerWidth;
    this.myCanvas.nativeElement.height = window.innerHeight;
  }

  decrementRadius(): void {
    this.strokeWidth -= (this.strokeWidth > 1) ? 1 : 0;
  }

  incrementRadius(): void {
    this.strokeWidth += (this.strokeWidth < 25) ? 1 : 0;
  }

  selectColor(index: number): void {
    if (this.eraser) this.eraser = false;
    this.selectedColor = index;
    this.strokeColor = this.colors[this.selectedColor];
  }

  clearScreen(): void {
    this.myCanvas.nativeElement.width = window.innerWidth;
  }
}
