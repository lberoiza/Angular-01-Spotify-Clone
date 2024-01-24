import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greetings-user',
  standalone: true,
  imports: [],
  templateUrl: './greetings-user.component.html',
  styleUrl: './greetings-user.component.css'
})
export class GreetingsUserComponent implements OnInit {

  private currentTime: Date = new Date()
  private currentHour: number = this.currentTime.getHours()
  protected greeting: string = ""

  ngOnInit(): void {
    this.setGreeting();
  }

  private setGreeting() {
    if (this.currentHour < 12) {
      this.greeting = "Buenos días"
    } else if (this.currentHour < 18) {
      this.greeting = "Buenas tardes"
    } else {
      this.greeting = "Buenas noches"
    }
  }


}
