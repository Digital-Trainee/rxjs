import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSubjectBehaviourComponent } from './subject-subject-behaviour.component';

describe('SubjectSubjectBehaviourComponent', () => {
  let component: SubjectSubjectBehaviourComponent;
  let fixture: ComponentFixture<SubjectSubjectBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectSubjectBehaviourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectSubjectBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
