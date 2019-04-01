import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperherogetComponent } from './superheroget.component';

describe('SuperherogetComponent', () => {
  let component: SuperherogetComponent;
  let fixture: ComponentFixture<SuperherogetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperherogetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperherogetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
