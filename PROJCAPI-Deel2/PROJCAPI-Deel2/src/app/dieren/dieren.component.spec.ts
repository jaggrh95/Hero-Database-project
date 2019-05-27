import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DierenComponent } from './dieren.component';

describe('DierenComponent', () => {
  let component: DierenComponent;
  let fixture: ComponentFixture<DierenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DierenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
