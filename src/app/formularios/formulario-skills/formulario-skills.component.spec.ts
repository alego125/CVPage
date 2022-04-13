import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSkillsComponent } from './formulario-skills.component';

describe('FormularioSkillsComponent', () => {
  let component: FormularioSkillsComponent;
  let fixture: ComponentFixture<FormularioSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
