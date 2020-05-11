import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { Whiteboard } from './components/whiteboard/whiteboard-screen.component';
import { SocketService } from './services/socket/socket.service';
import { WhiteboardContainerComponent } from './components/whiteboard-container/whiteboard-container.component';

const appRoutes: Routes = [
  { path: 'enter-screen', component: EnterScreenComponent },
  { path: 'board', component: WhiteboardContainerComponent },
  { path: '', redirectTo: '/enter-screen', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    Whiteboard,
    WhiteboardContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ToastNoAnimationModule.forRoot()
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
