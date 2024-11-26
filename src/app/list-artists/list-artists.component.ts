import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];
  albums: Album[] = [];

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
    this.service.getAlbumsOfArtist(artist.artist, (albums: Album[]) => {
      this.albums = albums;
    });
  }
}
