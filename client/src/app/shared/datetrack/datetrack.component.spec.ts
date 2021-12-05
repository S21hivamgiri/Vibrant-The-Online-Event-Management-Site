import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetrackComponent } from './datetrack.component';

describe('DatetrackComponent', () => {
  let component: DatetrackComponent;
  let fixture: ComponentFixture<DatetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatetrackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
