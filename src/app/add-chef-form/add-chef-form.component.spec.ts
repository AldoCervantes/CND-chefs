import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefFormComponent } from './add-chef-form.component';

describe('AddChefFormComponent', () => {
  let component: AddChefFormComponent;
  let fixture: ComponentFixture<AddChefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
