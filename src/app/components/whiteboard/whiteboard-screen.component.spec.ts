import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whiteboard } from './whiteboard-screen.component';

describe('Whiteboard', () => {
  let component: Whiteboard;
  let fixture: ComponentFixture<Whiteboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Whiteboard]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whiteboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
