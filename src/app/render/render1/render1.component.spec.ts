import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render1Component } from './render1.component';

describe('Render1Component', () => {
  let component: Render1Component;
  let fixture: ComponentFixture<Render1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
