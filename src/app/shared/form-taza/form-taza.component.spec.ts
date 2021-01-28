import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTazaComponent } from './form-taza.component';

describe('FormTazaComponent', () => {
  let component: FormTazaComponent;
  let fixture: ComponentFixture<FormTazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
