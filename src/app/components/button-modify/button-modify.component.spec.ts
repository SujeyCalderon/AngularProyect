import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModifyComponent } from './button-modify.component';

describe('ButtonModifyComponent', () => {
  let component: ButtonModifyComponent;
  let fixture: ComponentFixture<ButtonModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
