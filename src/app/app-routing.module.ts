import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { ListTracksComponent } from './list-tracks/list-tracks.component';

const routes: Routes = [
  { path: 'create', component: CreateAlbumComponent },
  { path: 'list-artists', component: ListArtistsComponent },
  { path: 'list-albums', component: ListAlbumsComponent },
  { path: 'display/:id', component: DisplayAlbumComponent },
  { path: 'tracks/:albumId', component: ListTracksComponent },
  { path: 'edit/:artist/:id', component: EditAlbumComponent },
  { path: 'delete/:artist/:id', component: DeleteAlbumComponent },
  { path: 'tracks/:albumId', component: ListTracksComponent } // Route to view tracks
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
