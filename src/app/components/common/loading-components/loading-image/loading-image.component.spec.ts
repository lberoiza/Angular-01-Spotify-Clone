import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingImageComponent } from './loading-image.component';

describe('LoadingComponent', () => {
  let component: LoadingImageComponent;
  let fixture: ComponentFixture<LoadingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
