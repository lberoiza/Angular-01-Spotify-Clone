import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { Component, OnInit } from '@angular/core';
import { SearchByStringType } from "@/service/IApplicationAPI";
import { SearchIconComponent } from "@/icons/search-icon.component";
import { debounceTime, Subject, take } from "rxjs";
import { PlaylistCardComponent } from "@/components/main/playlist-card/playlist-card.component";

import {
  PlaylistDetailsMusictableComponent
} from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";


@Component({
  selector: 'search-component',
  standalone: true,
  imports: [
    SearchIconComponent,
    PlaylistDetailsMusictableComponent,
    PlaylistCardComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  protected results!: SearchByStringType;
  protected searchSubject = new Subject<string>();

  constructor(private applicationApi: ApplicationApiMock) {
    this.initializeSearch();
  }

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(searchValue => {
      if (searchValue.length < 3) return;

      this.applicationApi.getSongsBySearchString(searchValue)
        .pipe(take(1))
        .subscribe(result => {
          this.results = result;
        });
    });
  }


  protected onSearchInputKeyUp(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      this.searchSubject.next(searchValue);
    } else {
      this.initializeSearch();
    }
  }

  private initializeSearch() {
    this.results = {
      playlists: [],
      songs: []
    }
  }

}
