import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKooiComponent } from './create-kooi.component';

describe('CreateKooiComponent', () => {
  let component: CreateKooiComponent;
  let fixture: ComponentFixture<CreateKooiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKooiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKooiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
