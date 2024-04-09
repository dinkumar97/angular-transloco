import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render8Component } from './render8.component';

describe('Render8Component', () => {
  let component: Render8Component;
  let fixture: ComponentFixture<Render8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
