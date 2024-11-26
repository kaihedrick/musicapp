import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Track } from '../models/tracks.model';

@Component({
  selector: 'app-list-tracks',
  templateUrl: './list-tracks.component.html',
  styleUrls: ['./list-tracks.component.css']
})
export class ListTracksComponent implements OnInit {
  tracks: Track[] = [];
  albumId: number | null = null;

  constructor(private route: ActivatedRoute, private musicService: MusicServiceService) {}

  ngOnInit(): void {
    // Get albumId from route parameters
    this.albumId = Number(this.route.snapshot.paramMap.get('albumId'));
    if (this.albumId) {
      this.musicService.getTracksForAlbum(this.albumId, (tracks: Track[]) => {
        this.tracks = tracks;
      });
    }
  }
}
