import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPlaylistCardComponent } from './loading-playlist-card.component';

describe('LoadingPlaylistCardComponent', () => {
  let component: LoadingPlaylistCardComponent;
  let fixture: ComponentFixture<LoadingPlaylistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingPlaylistCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingPlaylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
