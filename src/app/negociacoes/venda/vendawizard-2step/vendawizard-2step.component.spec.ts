import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendawizard2stepComponent } from './vendawizard-2step.component';

describe('Vendawizard2stepComponent', () => {
  let component: Vendawizard2stepComponent;
  let fixture: ComponentFixture<Vendawizard2stepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vendawizard2stepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vendawizard2stepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
