import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEliminateComponent } from './button-eliminate.component';

describe('ButtonEliminateComponent', () => {
  let component: ButtonEliminateComponent;
  let fixture: ComponentFixture<ButtonEliminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonEliminateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEliminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
