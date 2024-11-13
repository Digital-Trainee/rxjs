import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipAndForkJoinComponent } from './zip-and-fork-join.component';

describe('ZipAndForkJoinComponent', () => {
  let component: ZipAndForkJoinComponent;
  let fixture: ComponentFixture<ZipAndForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipAndForkJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipAndForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
