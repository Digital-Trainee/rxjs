import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapdoComponent } from './tapdo.component';

describe('TapdoComponent', () => {
  let component: TapdoComponent;
  let fixture: ComponentFixture<TapdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
