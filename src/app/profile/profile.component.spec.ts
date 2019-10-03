import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a <div> with the value of 'name' input`, () => {
  // SETUP
  // create the component within the testing context
  const fixture = TestBed.createComponent(ProfileComponent);
  // create a convenience reference for the component within the testing context
  const profile = fixture.debugElement.componentInstance;

  // EXECUTE
  // set the value of the 'name' input.
  profile.name = 'Emril Lagasse';
  // trigger Angular update process.
  fixture.detectChanges();

  // ASSERT
  // create a convenience reference for the DOM element(s) rendered by the component.
  const compiled:HTMLElement = fixture.debugElement.nativeElement;
  // get an array of all the 'div' elements rendered by the component.
  const allDivsInComponent: Array<HTMLElement> = Array.from(compiled.getElementsByTagName('div'));
  // determine whether any of those divs contains the 'name'input.
  let nameIsRendered:Boolean = allDivsInComponent.map((el:HTMLElement) => el.innerText).includes('Emril Lagasse');

  // the actual test: We expect the name to have been rendered on the page.
  expect(nameIsRendered).toBeTruthy();
})
});


describe('AppComponent', () => { 
  it('should render a <div>', () => {
       const fixture = TestBed.createComponent(ProfileComponent);
       const compiled: HTMLElement = fixture.debugElement.nativeElement;
       const allDivsInComponent: Array<HTMLElement> = Array.from(compiled.getElementsByTagName('div'));
       expect(allDivsInComponent.length).toBeGreaterThan(0);
 });
});