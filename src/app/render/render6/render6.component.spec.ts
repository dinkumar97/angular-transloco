import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Render6Component } from './render6.component';

describe('Render6Component', () => {
  let component: Render6Component;
  let fixture: ComponentFixture<Render6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Render6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Render6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
