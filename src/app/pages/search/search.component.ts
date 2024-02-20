import { AppState } from "@/store/app.state";
import { Component, OnInit } from '@angular/core';
import { PlaylistCardComponent } from "@/components/main/playlist-card/playlist-card.component";
import { SearchByStringType } from "@/service/IApplicationAPI";
import { SearchIconComponent } from "@/icons/search-icon.component";
import { Store } from "@ngrx/store";
import { debounceTime, Subject } from "rxjs";

import {
  PlaylistDetailsMusictableComponent
} from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";
import { SearchStoreActions } from "@/store/search-store/searchstore.actions";
import { SelectSearchIsSearching, SelectSearchLastResult } from "@/store/search-store/searchstore.selectors";
import { SearchResult } from "@/models/state/searchstate.model";


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

  protected results!: SearchResult;
  protected searchSubject = new Subject<string>();
  protected isSearching: boolean = false;

  constructor(private store: Store<AppState>) {
    this.initializeSearch();
  }

  ngOnInit() {
    this.initializeSearchSubject();
    this.store.select(SelectSearchIsSearching).subscribe(isSearching => this.isSearching = isSearching);
    this.store.select(SelectSearchLastResult).subscribe(lastResult => this.results = lastResult);
  }

  private initializeSearchSubject() {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(searchValue => {
      if (searchValue.length < 3) return;
      this.store.dispatch(SearchStoreActions.search({searchString: searchValue}));
    });
  }

  private initializeSearch() {
    this.results = {
      searchString: '',
      playlists: [],
      songs: []
    }
  }

  protected onSearchInput(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      this.searchSubject.next(searchValue);
    } else {
      this.store.dispatch(SearchStoreActions.setResult({searchString: '', playlists: [], songs: []}));
    }
  }

}
