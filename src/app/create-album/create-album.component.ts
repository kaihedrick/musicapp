import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  //here is the album property with a randomized album id for testing purposes as we don't have auto increment from DB yet
  album: Album = { //generate with empty attributes so that in case value is null there won't be an error thrown
    albumId: Math.floor(Math.random() * 1000000),
    title: "",
    artist: "",
    description: "",
    year: "",
    image: "",
    tracks: [],
  };
  //stores the raw stiring input of track details entered by the user text area
  tracksRaw: string = "";
  //this variable is a flag to track if the album has been updated or not
  wasSubmitted: boolean = false;
  //constructor will be set to private for security and will be injected into the music service to be accessed by the create album method
  constructor(private service: MusicServiceService) { }
  //runs any initialization logic when the component loads
  ngOnInit() {}
  //purpose is when the form is submitted, this will handle the album creation process
  public onSubmit() {
    // Parse tracks and add them to the album
    let tracks: Track[] = [];
    const tracksAll = this.tracksRaw.split('\n');
    tracksAll.forEach((trackInfo, i) => {
      const [title, lyrics = "", video = ""] = trackInfo.split(':');
      tracks.push({
        trackId: Math.floor(Math.random() * 1000000),
        number: i + 1,
        title: title.trim(),
        lyrics: lyrics.trim(),
        video: video.trim()
      });
    });
    this.album.tracks = tracks;

    // Call the service to create a new album and handle the response with a callback
    console.log("Submitting album:", this.album);
    this.service.createAlbum(this.album, () => {
      // Callback function executed on successful album creation
      this.wasSubmitted = true;
      console.log("Album created successfully");
    });
  }

}
