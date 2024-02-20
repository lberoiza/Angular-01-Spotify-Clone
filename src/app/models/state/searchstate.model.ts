import type { Playlist, Song } from "@/data/data";

export type SearchResult = {
  searchString: string;
  playlists: Playlist[];
  songs: Song[];
}

export interface SearchState {
  lastResult: SearchResult;
  isSearching: boolean;
}
