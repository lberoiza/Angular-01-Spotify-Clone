import { type Playlist } from "@/data/data";

export interface UserState {
  playlists: Playlist[];
  username: string;
  isLoadingPlaylistData: boolean;
}
