import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render7Component } from './render7.component';

describe('Render7Component', () => {
  let component: Render7Component;
  let fixture: ComponentFixture<Render7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
