import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  imports: [],
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.css'
})
export class PlaylistDetailsComponent implements OnInit  {
  // @Input() playlistId: number;
  protected playlistId: number = 0;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute){
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.playlistId = id;
      }
    });

  }

}
