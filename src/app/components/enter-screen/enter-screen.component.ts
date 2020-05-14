import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.css']
})
export class EnterScreenComponent implements OnInit {
  username: string = "";
  room: string = "";
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  proceed(): void {
    this.userService.setInfo(this.username, this.room);
    if (this.userService.checkInfo()) {
      this.router.navigate(['/board']);
    }
  }

}
