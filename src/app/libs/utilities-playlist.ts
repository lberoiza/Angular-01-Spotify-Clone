import type { Song } from "@/data/data";
import { getSongDurationInSeconds } from "@/libs/utilities-song";

export interface PlaylistDuration {
  hours: number;
  minutes: number;
  seconds: number;
}


export function getPlaylistDuration(playlistSongs: Song[]): PlaylistDuration {
  let totalOfSeconds = 0;

  playlistSongs.forEach((song) => {
    totalOfSeconds += getSongDurationInSeconds(song);
  });

  return {
    hours: Math.floor(totalOfSeconds / 3600),
    minutes: Math.floor((totalOfSeconds % 3600) / 60),
    seconds: totalOfSeconds % 60
  };
}
