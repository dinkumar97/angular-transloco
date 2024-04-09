import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render3Component } from './render3.component';

describe('Render3Component', () => {
  let component: Render3Component;
  let fixture: ComponentFixture<Render3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
