import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcontrolFormComponent } from './bcontrol-form.component';

describe('BcontrolFormComponent', () => {
  let component: BcontrolFormComponent;
  let fixture: ComponentFixture<BcontrolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcontrolFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcontrolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
