import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render9Component } from './render9.component';

describe('Render9Component', () => {
  let component: Render9Component;
  let fixture: ComponentFixture<Render9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
