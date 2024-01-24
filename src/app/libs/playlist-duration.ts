import type { Song } from "@/data/data";

export interface PlaylistDuration {
  hours: number;
  minutes: number;
  seconds: number;
}


export function getPlaylistDuration(playlistSongs: Song[]): PlaylistDuration {
  let totalOfSeconds = 0;

  playlistSongs.forEach((song) => {
    const [seconds = 0, minutes = 0, hours = 0] = song.duration.split(':').reverse().map(Number);
    totalOfSeconds += hours * 3600 + minutes * 60 + seconds;
  });

  return {
    hours: Math.floor(totalOfSeconds / 3600),
    minutes: Math.floor((totalOfSeconds % 3600) / 60),
    seconds: totalOfSeconds % 60
  };
}
