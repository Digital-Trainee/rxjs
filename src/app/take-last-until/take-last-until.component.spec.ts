import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeLastUntilComponent } from './take-last-until.component';

describe('TakeLastUntilComponent', () => {
  let component: TakeLastUntilComponent;
  let fixture: ComponentFixture<TakeLastUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeLastUntilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeLastUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
