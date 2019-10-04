import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailsComponent } from './liste-details.component';

describe('ListeDetailsComponent', () => {
  let component: ListeDetailsComponent;
  let fixture: ComponentFixture<ListeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
