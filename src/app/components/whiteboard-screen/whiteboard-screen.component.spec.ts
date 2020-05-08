import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardScreenComponent } from './whiteboard-screen.component';

describe('WhiteboardScreenComponent', () => {
  let component: WhiteboardScreenComponent;
  let fixture: ComponentFixture<WhiteboardScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
