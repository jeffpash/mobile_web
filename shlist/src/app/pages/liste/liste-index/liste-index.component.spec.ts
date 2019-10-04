import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIndexComponent } from './liste-index.component';

describe('ListeIndexComponent', () => {
  let component: ListeIndexComponent;
  let fixture: ComponentFixture<ListeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
