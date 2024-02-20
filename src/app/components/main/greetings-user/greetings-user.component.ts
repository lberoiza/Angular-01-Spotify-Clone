import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectUserUsername } from "@/store/user-store/userstore.selectors";

@Component({
  selector: 'greetings-user',
  standalone: true,
  imports: [],
  templateUrl: './greetings-user.component.html',
  styleUrl: './greetings-user.component.css'
})
export class GreetingsUserComponent implements OnInit {

  private currentTime: Date = new Date();
  private currentHour: number = this.currentTime.getHours();
  protected greeting: string = "";
  protected username: string = "";

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(SelectUserUsername).subscribe(username => this.username = username);
    this.setGreeting();
  }

  private setGreeting() {
    if (this.currentHour < 12) {
      this.greeting = "Good morning"
    } else if (this.currentHour < 18) {
      this.greeting = "Good afternoon"
    } else {
      this.greeting = "Good evening"
    }
  }


  protected getGreeting(): string {
    if(this.username !== "") {
      return `${this.greeting}, ${this.username}`;
    }
    return this.greeting;
  }

}
