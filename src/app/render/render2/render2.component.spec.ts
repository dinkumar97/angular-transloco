import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render2Component } from './render2.component';

describe('Render2Component', () => {
  let component: Render2Component;
  let fixture: ComponentFixture<Render2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
