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
  const  compareRandom = (song1: Song, song2: Song): number =>  song1.id > song2.id ? 1 : -1
  const shuffledArray: Song[] = [...array];
  shuffledArray.sort(compareRandom);
  return shuffledArray;
}
