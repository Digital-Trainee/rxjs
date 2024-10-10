import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlucjComponent } from './pluck.component';

describe('PlucjComponent', () => {
  let component: PlucjComponent;
  let fixture: ComponentFixture<PlucjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlucjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlucjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
