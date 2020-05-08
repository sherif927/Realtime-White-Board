import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterScreenComponent } from './enter-screen.component';

describe('EnterScreenComponent', () => {
  let component: EnterScreenComponent;
  let fixture: ComponentFixture<EnterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
