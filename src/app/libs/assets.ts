import type { Playlist, Song } from "@/data/data";

export const MUSIC_DIRECTORY = 'assets/music';

export function getSongUrl(playlist: Playlist | undefined, song: Song | undefined): string {
  if (!playlist && !song) {
    return '';
  }
  return `${MUSIC_DIRECTORY}/${playlist?.id}/${song?.id}.mp3`
}
