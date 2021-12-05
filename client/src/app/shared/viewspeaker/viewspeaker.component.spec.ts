import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspeakerComponent } from './viewspeaker.component';

describe('ViewspeakerComponent', () => {
  let component: ViewspeakerComponent;
  let fixture: ComponentFixture<ViewspeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewspeakerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
