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
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover:
      "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
  {
    id: '7',
    albumId: 7,
    title: "Video Game Music",
    color: colors.red,
    cover:
      "https://www.thefactsite.com/wp-content/uploads/2021/11/100-video-game-facts-740x370.webp",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
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
    "image": "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
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
    "image": "https://f4.bcbits.com/img/a1435058381_65.jpg",
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
    "image": "https://f4.bcbits.com/img/a1435058381_65.jpg",
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
    "image": "https://f4.bcbits.com/img/a1435058381_65.jpg",
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
    "image": "https://f4.bcbits.com/img/a1435058381_65.jpg",
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
    "image": "https://f4.bcbits.com/img/a1435058381_65.jpg",
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
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
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
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:54",
    "isStored": true
  },
  {
    "id": 26,
    "url": "https://delta.vgmsite.com/soundtracks/legend-of-zelda-the-ocarina-of-time-original-sound-track-1998/mjihbqghgr/01%20Title%20Theme.mp3",
    "albumId": 7,
    "title": "Title Theme",
    "image": "https://delta.vgmsite.com/soundtracks/legend-of-zelda-the-ocarina-of-time-original-sound-track-1998/Cover.jpg",
    "artists": ["No Tengo"],
    "album": "Zelda Ocarina of Time",
    "duration": "1:20",
    "isStored": false
  },
  {
    "id": 27,
    "url": "https://dl.vgmdownloads.com/soundtracks/donkey-kong-country-snes/xapjvjkycu/07.%20Aquatic%20Ambiance.mp3",
    "albumId": 7,
    "title": "Aquatic Ambiance",
    "image": "https://www.binaryscroll.net/img/dkc/dkc_00.png",
    "artists": ["Rare"],
    "album": "Donkey Kong Country",
    "duration": "3:24",
    "isStored": false
  },  {
    "id": 28,
    "url": "https://dl.vgmdownloads.com/soundtracks/donkey-kong-country-snes/lpveeenjsa/13.%20Forest%20Frenzy.mp3",
    "albumId": 7,
    "title": "Forest Frenzy",
    "image": "https://www.binaryscroll.net/img/dkc/dkc_00.png",
    "artists": ["Rare"],
    "album": "Donkey Kong Country",
    "duration": "2:06",
    "isStored": false
  },
]

