import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMergeComponent } from './map-merge.component';

describe('MapMergeComponent', () => {
  let component: MapMergeComponent;
  let fixture: ComponentFixture<MapMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapMergeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
