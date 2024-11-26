import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnChanges {
  @Input() artist: Artist | null = null;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private musicService: MusicServiceService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['artist'] && this.artist) {
      this.loadAlbums();
    }
  }

  loadAlbums() {
    this.musicService.getAlbumsOfArtist(this.artist!.artist, (albums: Album[]) => {
      this.albums = albums;
    });
  }

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }

  public viewTracks(albumId: number): void {
    this.router.navigate(['/tracks', albumId]);
  }
}
