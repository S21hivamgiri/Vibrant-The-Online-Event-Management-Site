import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsponsorsComponent } from './addsponsors.component';

describe('AddsponsorsComponent', () => {
  let component: AddsponsorsComponent;
  let fixture: ComponentFixture<AddsponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddsponsorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
