import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendawizard1stepComponent } from './vendawizard-1step.component';

describe('Vendawizard1stepComponent', () => {
  let component: Vendawizard1stepComponent;
  let fixture: ComponentFixture<Vendawizard1stepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vendawizard1stepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vendawizard1stepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
