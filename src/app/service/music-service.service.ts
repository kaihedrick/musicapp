import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model'
import { Track } from '../models/tracks.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ //this keeps the app service as a singleton, which restricts a musicServiceService class to a single instance to make sure the class is shared across the entire app
  providedIn: 'root'
})
export class MusicServiceService {
  //makes sure the albums are in a list to be shared across different components
  private host = "http://localhost:3000"

  albums: Album[] = exampledata;

  //this will load the initial album data into the constructor so that when the service is initialized, the page can be displayed on the listAlbums page to display all albums
  constructor(private http: HttpClient) {}


    //returns the list of artists based on albums data
    //typescript syntax to define a callback function with an array of Artist as a parameter. This callback returns void.
    //getArtists also returns void, however these are defined independently.
    public getArtists(callback: (artists: Artist[]) => void): void {
      this.http.get<Artist[]>(this.host + "/artists").
        subscribe((artists: Artist[]) => {
          callback(artists);
        });
    }
    public getAlbums(callback: (albums: Album[]) => void): void {
      //returns a list of albums
      this.http.get<Album[]>(this.host + "/albums").
        subscribe((albums: Album[]) => {
          callback(albums);
        });
    }

    public getAlbumsOfArtist(artistName: string, callback: (albums: Album[]) => void): void {
      const request = `${this.host}/albums/${artistName}`;
      this.http.get<Album[]>(request).subscribe((albums) => callback(albums));
    }
    public getTracksForAlbum(albumId: number, callback: (tracks: Track[]) => void): void {
      const request = `${this.host}/albums/${albumId}/tracks`;
      this.http.get<Track[]>(request).subscribe((tracks) => {
        callback(tracks);
      });
    }
    public createAlbum(album: Album, callback: () => void): void {
      // Add a new Album
      this.http.post<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
    }
    public updateAlbum(album: Album, callback: () => void): void {
      this.http.put<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
    }
    public deleteAlbum(id: number, callback: () => void): void {
      this.http.delete(this.host + "/albums/" + id)
      .subscribe((data) => {
        callback();
      });
    }
}
