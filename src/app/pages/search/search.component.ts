import { Component, OnInit } from '@angular/core';
import type { Song } from "@/data/data";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { SearchIconComponent } from "@/icons/search-icon.component";
import { debounceTime, Subject, take } from "rxjs";
import {
  PlaylistDetailsMusictableComponent
} from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchIconComponent,
    PlaylistDetailsMusictableComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  protected results: Song[] = [];
  protected searchSubject = new Subject<string>();

  constructor(private applicationApi: ApplicationApiMock) {
  }

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(searchValue => {
      if (searchValue.length < 3) return;

      this.applicationApi.getSongsBySearchString(searchValue)
        .pipe(take(1))
        .subscribe(songs => {
          this.results = songs;
        });
    });
  }


  protected onSearchInputKeyUp(event: KeyboardEvent) {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      this.searchSubject.next(searchValue);
    } else {
      this.results = [];
    }
  }

}
