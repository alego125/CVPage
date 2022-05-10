import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionEducacionComponent } from './formulario-edicion-educacion.component';

describe('FormularioEdicionEducacionComponent', () => {
  let component: FormularioEdicionEducacionComponent;
  let fixture: ComponentFixture<FormularioEdicionEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEdicionEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEdicionEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
