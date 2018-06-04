import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trocawizard2stepComponent } from './trocawizard-2step.component';

describe('Trocawizard2stepComponent', () => {
  let component: Trocawizard2stepComponent;
  let fixture: ComponentFixture<Trocawizard2stepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trocawizard2stepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trocawizard2stepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
