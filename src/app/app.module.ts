import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { WhiteboardScreenComponent } from './components/whiteboard-screen/whiteboard-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    WhiteboardScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
