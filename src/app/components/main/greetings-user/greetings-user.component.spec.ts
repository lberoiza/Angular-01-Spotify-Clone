import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsUserComponent } from './greetings-user.component';

describe('GreetingsUserComponent', () => {
  let component: GreetingsUserComponent;
  let fixture: ComponentFixture<GreetingsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreetingsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
