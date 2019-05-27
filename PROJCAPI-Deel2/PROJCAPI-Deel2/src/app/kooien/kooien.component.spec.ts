import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KooienComponent } from './kooien.component';

describe('KooienComponent', () => {
  let component: KooienComponent;
  let fixture: ComponentFixture<KooienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KooienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KooienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
