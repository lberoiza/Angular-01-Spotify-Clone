import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { type Playlist, playlists, type Song, songs } from "@/data/data";
import { PlaylistDetailsMusictableComponent } from "../playlist-details-musictable/playlist-details-musictable.component";

export interface SongDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  imports: [PlaylistDetailsMusictableComponent],
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.css'
})
export class PlaylistDetailsComponent implements OnInit {
  protected allPlaylists: Playlist[] = playlists;
  protected playlistDetails: Playlist | undefined = undefined;
  protected playlistSongs: Song[] = [];
  protected playlistDuration: SongDuration = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.playlistDetails = this.allPlaylists.find(playlist => playlist.id == id);
        this.playlistSongs = songs.filter((song) => song.albumId === this.playlistDetails?.albumId)
        this.playlistDuration = this.getTotalTime();
      }
    });
  }


  private getTotalTime(): SongDuration {
    let totalOfSeconds = 0;

    this.playlistSongs.forEach((song) => {
      const [seconds = 0, minutes = 0, hours = 0] = song.duration.split(':').reverse().map(Number);
      totalOfSeconds += hours * 3600 + minutes * 60 + seconds;
    });

    return {
      hours: Math.floor(totalOfSeconds / 3600),
      minutes: Math.floor((totalOfSeconds % 3600) / 60),
      seconds: totalOfSeconds % 60
    };
  }

}
