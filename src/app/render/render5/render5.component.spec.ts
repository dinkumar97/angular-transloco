import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render5Component } from './render5.component';

describe('Render5Component', () => {
  let component: Render5Component;
  let fixture: ComponentFixture<Render5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
