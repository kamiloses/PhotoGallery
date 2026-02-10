import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardDetailsComponent } from './photo-card-details.component';

describe('PhotoCardDetailsComponent', () => {
  let component: PhotoCardDetailsComponent;
  let fixture: ComponentFixture<PhotoCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCardDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
