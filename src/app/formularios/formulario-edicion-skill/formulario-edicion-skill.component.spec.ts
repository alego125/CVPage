import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionSkillComponent } from './formulario-edicion-skill.component';

describe('FormularioEdicionSkillComponent', () => {
  let component: FormularioEdicionSkillComponent;
  let fixture: ComponentFixture<FormularioEdicionSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEdicionSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEdicionSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
