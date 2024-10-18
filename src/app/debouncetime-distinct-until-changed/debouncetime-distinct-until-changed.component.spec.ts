import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeDistinctUntilChangedComponent } from './debouncetime-distinct-until-changed.component';

describe('DebouncetimeDistinctUntilChangedComponent', () => {
  let component: DebouncetimeDistinctUntilChangedComponent;
  let fixture: ComponentFixture<DebouncetimeDistinctUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebouncetimeDistinctUntilChangedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebouncetimeDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
