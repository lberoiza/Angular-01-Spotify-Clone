import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonRepeatComponent } from './player-button-repeat.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerButtonRepeatComponent', () => {
  let component: PlayerButtonRepeatComponent;
  let fixture: ComponentFixture<PlayerButtonRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonRepeatComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerButtonRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
