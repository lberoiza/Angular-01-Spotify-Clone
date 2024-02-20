import type { Playlist, Song } from "@/data/data";

type SearchResult = {
  searchString: string;
  playlists: Playlist[];
  songs: Song[];
}

export interface SearchState {
  lastResult: SearchResult;
  isSearching: boolean;
}
