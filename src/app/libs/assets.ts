import type { Playlist, Song } from "@/data/data";

export const MUSIC_DIRECTORY = 'assets/music';

export function getSongUrl(song: Song | undefined): string {
  if (!song) {
    return '';
  }
  return `${MUSIC_DIRECTORY}/${song?.albumId}/${song?.filename}`
}
