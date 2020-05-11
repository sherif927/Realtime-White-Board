import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.css']
})
export class EnterScreenComponent implements OnInit {
  username: string = "";
  room: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void { }

  proceed(): void {
    this.router.navigate(['/board']);
  }

}
