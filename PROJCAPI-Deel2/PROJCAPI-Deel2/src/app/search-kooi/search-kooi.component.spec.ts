import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKooiComponent } from './search-kooi.component';

describe('SearchKooiComponent', () => {
  let component: SearchKooiComponent;
  let fixture: ComponentFixture<SearchKooiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchKooiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchKooiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
