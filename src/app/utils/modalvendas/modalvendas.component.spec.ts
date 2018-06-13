import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvendasComponent } from './modalvendas.component';

describe('ModalvendasComponent', () => {
  let component: ModalvendasComponent;
  let fixture: ComponentFixture<ModalvendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalvendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalvendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
