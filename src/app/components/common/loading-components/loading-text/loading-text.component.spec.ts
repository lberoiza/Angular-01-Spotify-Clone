import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTextComponent } from './loading-text.component';

describe('LoadingTextComponent', () => {
  let component: LoadingTextComponent;
  let fixture: ComponentFixture<LoadingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
