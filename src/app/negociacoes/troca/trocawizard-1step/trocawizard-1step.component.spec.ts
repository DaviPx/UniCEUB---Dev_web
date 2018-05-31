import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trocawizard1stepComponent } from './trocawizard-1step.component';

describe('Trocawizard1stepComponent', () => {
  let component: Trocawizard1stepComponent;
  let fixture: ComponentFixture<Trocawizard1stepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trocawizard1stepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trocawizard1stepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
