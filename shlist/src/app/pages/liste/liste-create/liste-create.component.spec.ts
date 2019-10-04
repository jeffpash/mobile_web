import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCreateComponent } from './liste-create.component';

describe('ListeCreateComponent', () => {
  let component: ListeCreateComponent;
  let fixture: ComponentFixture<ListeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
