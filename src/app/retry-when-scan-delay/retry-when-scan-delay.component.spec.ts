import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryWhenScanDelayComponent } from './retry-when-scan-delay.component';

describe('RetryWhenScanDelayComponent', () => {
  let component: RetryWhenScanDelayComponent;
  let fixture: ComponentFixture<RetryWhenScanDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetryWhenScanDelayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryWhenScanDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
