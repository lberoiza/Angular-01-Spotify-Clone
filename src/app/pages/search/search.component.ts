import { Component } from '@angular/core';
import { SearchIconComponent } from "@/icons/search-icon.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchIconComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
