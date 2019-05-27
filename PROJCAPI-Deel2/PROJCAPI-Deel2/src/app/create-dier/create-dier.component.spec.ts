import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDierComponent } from './create-dier.component';

describe('CreateDierComponent', () => {
  let component: CreateDierComponent;
  let fixture: ComponentFixture<CreateDierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
