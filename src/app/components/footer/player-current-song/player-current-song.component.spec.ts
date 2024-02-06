import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCurrentSongComponent } from './player-current-song.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerCurrentSongComponent', () => {
  let component: PlayerCurrentSongComponent;
  let fixture: ComponentFixture<PlayerCurrentSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCurrentSongComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCurrentSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
