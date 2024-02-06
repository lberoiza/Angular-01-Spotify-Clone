import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonBackComponent } from './player-button-back.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerButtonBackComponent', () => {
  let component: PlayerButtonBackComponent;
  let fixture: ComponentFixture<PlayerButtonBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonBackComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerButtonBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
