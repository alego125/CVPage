import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRedesComponent } from './formulario-redes.component';

describe('FormularioRedesComponent', () => {
  let component: FormularioRedesComponent;
  let fixture: ComponentFixture<FormularioRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
