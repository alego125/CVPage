import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPresentacionComponent } from './formulario-presentacion.component';

describe('FormularioPresentacionComponent', () => {
  let component: FormularioPresentacionComponent;
  let fixture: ComponentFixture<FormularioPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPresentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
