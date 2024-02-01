import type { Song } from "@/data/data";

export function songArtistAsString(artistArray: string[]): string {
  return artistArray.join(', ');
}

export function shuffleSongArray(array: Song[]): Song[] {
  const shuffledArray = [...array]; // Copia el array original para no modificarlo directamente
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio entre 0 e i
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Intercambia los elementos en las posiciones i y j
  }
  return shuffledArray;
}

export function sortSongArray(array: Song[]): Song[] {
  const compareRandom = (song1: Song, song2: Song): number => song1.id > song2.id ? 1 : -1
  const shuffledArray: Song[] = [...array];
  shuffledArray.sort(compareRandom);
  return shuffledArray;
}

function isLastIndexOrOutOfRange(songList: Song[], currentSongIndex: number): boolean {
  return currentSongIndex === -1 || currentSongIndex === songList.length - 1
}

function isFirstIndexOrOutOfRange(songList: Song[], currentSongIndex: number): boolean {
  return currentSongIndex === -1 || currentSongIndex === 0
}

function findSongIndexInList(songs: Song[], currentSong: Song): number {
  return songs.findIndex(song => song.id === currentSong.id);
}

export function nextSongOfList(songList: Song[], currentSong: Song, repeatPlaylist: boolean): Song {
  const currentSongIndex: number = findSongIndexInList(songList, currentSong);
  const firstSongOrCurrentSong: Song = repeatPlaylist ? songList[0] : currentSong;
  return isLastIndexOrOutOfRange(songList, currentSongIndex) ? firstSongOrCurrentSong : songList[currentSongIndex + 1];
}

export function previousSongInList(songList: Song[], currentSong: Song, repeatPlaylist: boolean): Song {
  const currentSongIndex: number = findSongIndexInList(songList, currentSong);
  const lastSongOrCurrentSong: Song = repeatPlaylist ? songList[songList.length - 1] : currentSong;
  return isFirstIndexOrOutOfRange(songList, currentSongIndex) ? lastSongOrCurrentSong : songList[currentSongIndex - 1];
}

