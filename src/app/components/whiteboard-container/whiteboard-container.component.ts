import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from 'src/app/services/socket/socket.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/internal/Subscription';
import { BoardService } from 'src/app/services/board/board.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-whiteboard-container',
  templateUrl: './whiteboard-container.component.html',
  styleUrls: ['./whiteboard-container.component.css']
})
export class WhiteboardContainerComponent implements OnInit, OnDestroy {
  joinSubscription: Subscription;
  strokeSubscription: Subscription;
  username: string;
  room: string;
  constructor(private socketService: SocketService, private route: ActivatedRoute,
    private toastr: ToastrService, private board: BoardService, private userService: UserService) { }

  ngOnInit(): void {
    this.socketService.init();
    this.username = this.userService.getUserame();
    this.room = this.userService.getRoomName();
    this.socketService.joinRoom(this.username, this.room);
    this.joinSubscription = this.socketService
      .listen('userChange')
      .subscribe(this.onUserJoined);
    this.strokeSubscription = this.socketService
      .listen('newStroke')
      .subscribe(this.onStrokeRecieved);
  }

  ngOnDestroy(): void {
    this.joinSubscription.unsubscribe();
    this.strokeSubscription.unsubscribe();
    this.socketService.disconnect();
  }

  sendMessage(): void { }
  onNewStroke = (newStroke: string) => this.socketService.sendMessage('createStroke', newStroke);
  onStrokeRecieved = (newStroke: any) => {
    if (newStroke.senderName !== this.username)
      this.board.setCurrentImage(newStroke);
  }
  onUserJoined = (userInfo: any) => this.toastr.info(userInfo.content.text, userInfo.content.title);

}
