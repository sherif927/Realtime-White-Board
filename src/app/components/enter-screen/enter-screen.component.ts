import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.css']
})
export class EnterScreenComponent implements OnInit {
  username: string = "";
  room: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  proceed(): void {
    console.log(`username is ${this.username}, room is ${this.room}`);
  }

}
