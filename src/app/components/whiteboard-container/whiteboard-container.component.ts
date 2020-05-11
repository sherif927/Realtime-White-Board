import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket/socket.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-whiteboard-container',
  templateUrl: './whiteboard-container.component.html',
  styleUrls: ['./whiteboard-container.component.css']
})
export class WhiteboardContainerComponent implements OnInit {

  constructor(private socketService: SocketService, private route: ActivatedRoute, private toastr: ToastrService) { }
  ngOnInit(): void { }
  sendMessage(): void { }
  onNewStroke(newStroke: string): void { }

}
