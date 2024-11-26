import { Component, Input } from '@angular/core';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album', // this component is responsible for displaying the details of a specific album
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css'
})
export class DisplayAlbumComponent {
    // album property is set as an input to receive album data from a parent component
    @Input() album: Album | null = null; // initialized to null to avoid errors if album is not provided
}
