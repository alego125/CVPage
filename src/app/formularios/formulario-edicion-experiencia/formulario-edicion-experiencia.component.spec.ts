import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionExperienciaComponent } from './formulario-edicion-experiencia.component';

describe('FormularioEdicionExperienciaComponent', () => {
  let component: FormularioEdicionExperienciaComponent;
  let fixture: ComponentFixture<FormularioEdicionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEdicionExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEdicionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
