import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render4Component } from './render4.component';

describe('Render4Component', () => {
  let component: Render4Component;
  let fixture: ComponentFixture<Render4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
