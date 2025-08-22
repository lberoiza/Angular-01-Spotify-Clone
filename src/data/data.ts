import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
  url: string;
  isStored: boolean;
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "./assets/images/cover-01.png",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "./assets/images/cover-02.jpg",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "./assets/images/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "./assets/images/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover:
      "./assets/images/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "./assets/images/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
  {
    id: '7',
    albumId: 7,
    title: "Video Game Music",
    color: colors.red,
    cover:
      "./assets/images/100-video-game-facts-740x370.webp",
    artists: ["Many Artists"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]


export const songs: Song[] = [
  {
    "id": 1,
    "url": "1.mp3",
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": playlists[0].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:57",
    "isStored": true
  },
  {
    "id": 2,
    "url": "2.mp3",
    "albumId": 1,
    "title": "Coffee Daze",
    "image": playlists[0].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:40",
    "isStored": true
  },
  {
    "id": 3,
    "url": "3.mp3",
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": playlists[0].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:29",
    "isStored": true
  },
  {
    "id": 4,
    "url": "4.mp3",
    "albumId": 1,
    "title": "Urban Echoes",
    "image": playlists[0].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:11",
    "isStored": true
  },
  {
    "id": 5,
    "url": "5.mp3",
    "albumId": 1,
    "title": "Night's End",
    "image": playlists[0].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:26",
    "isStored": true
  },
  {
    "id": 6,
    "url": "1.mp3",
    "albumId": 2,
    "title": "Silent Rain",
    "image": playlists[1].cover,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:38",
    "isStored": true
  },
  {
    "id": 7,
    "url": "2.mp3",
    "albumId": 2,
    "title": "Lost Pages",
    "image": playlists[1].cover,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:40",
    "isStored": true
  },
  {
    "id": 8,
    "url": "3.mp3",
    "albumId": 2,
    "title": "Ethereal Dreams",
    "image": playlists[1].cover,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration":"2:53",
    "isStored": true
  },
  {
    "id": 9,
    "url": "4.mp3",
    "albumId": 2,
    "title": "City Lights",
    "image": playlists[1].cover,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:11",
    "isStored": true
  },
  {
    "id": 10,
    "url": "5.mp3",
    "albumId": 2,
    "title": "Night Drive",
    "image": playlists[1].cover,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:58",
    "isStored": true
  },
  {
    "id": 11,
    "url": "1.mp3",
    "albumId": 3,
    "title": "Lunar",
    "image": playlists[2].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:06",
    "isStored": true
  },
  {
    "id": 12,
    "url": "2.mp3",
    "albumId": 3,
    "title": "Rhythm of the Night",
    "image": playlists[2].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:30",
    "isStored": true
  },
  {
    "id": 13,
    "url": "3.mp3",
    "albumId": 3,
    "title": "Concentration",
    "image": playlists[2].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:59",
    "isStored": true
  },
  {
    "id": 14,
    "url": "4.mp3",
    "albumId": 3,
    "title": "Flow State",
    "image": playlists[2].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:56",
    "isStored": true
  },
  {
    "id": 15,
    "url": "5.mp3",
    "albumId": 3,
    "title": "Zen Garden",
    "image": playlists[2].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:30",
    "isStored": true
  },
  {
    "id": 16,
    "url": "1.mp3",
    "albumId": 4,
    "title": "Dreamscape",
    "image": playlists[3].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:59",
    "isStored": true
  },
  {
    "id": 17,
    "url": "2.mp3",
    "albumId": 4,
    "title": "Mystic Realm",
    "image": playlists[3].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:12",
    "isStored": true
  },
  {
    "id": 18,
    "url": "3.mp3",
    "albumId": 4,
    "title": "Serenity",
    "image": playlists[3].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:02",
    "isStored": true
  },
  {
    "id": 19,
    "url": "4.mp3",
    "albumId": 4,
    "title": "Tranquil Waters",
    "image": playlists[3].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29",
    "isStored": true
  },
  {
    "id": 20,
    "url": "5.mp3",
    "albumId": 4,
    "title": "Deep Meditation",
    "image": playlists[3].cover,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29",
    "isStored": true
  },
  {
    "id": 21,
    "url": "1.mp3",
    "albumId": 5,
    "title": "Dancing Shadows",
    "image": playlists[4].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:49",
    "isStored": true
  },
  {
    "id": 22,
    "url": "2.mp3",
    "albumId": 5,
    "title": "Twilight Lullaby",
    "image": playlists[4].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "1:52",
    "isStored": true
  },
  {
    "id": 23,
    "url": "3.mp3",
    "albumId": 5,
    "title": "Enchanted Forest",
    "image": playlists[4].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:15",
    "isStored": true
  },
  {
    "id": 24,
    "url": "4.mp3",
    "albumId": 5,
    "title": "Soothing Melody",
    "image": playlists[4].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:06",
    "isStored": true
  },
  {
    "id": 25,
    "url": "5.mp3",
    "albumId": 5,
    "title": "Tranquility",
    "image": playlists[4].cover,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:54",
    "isStored": true
  },
  {
    "id": 26,
    "url": "swat_kats_intro_2_hq.mp3",
    "albumId": 7,
    "title": "Swat Kats Title Theme",
    "image": "./assets/images/SwatKats.jpg",
    "artists": ["Cartoon Network"],
    "album": "Swat Kats - The radical squad",
    "duration": "0:29",
    "isStored": true
  },
  {
    "id": 27,
    "url": "DonkeyKongCountry-AquaticAmbience.mp3",
    "albumId": 7,
    "title": "Aquatic Ambiance",
    "image": "./assets/images/dkc_00.png",
    "artists": ["Rare"],
    "album": "Donkey Kong Country",
    "duration": "3:24",
    "isStored": true
  }
]

