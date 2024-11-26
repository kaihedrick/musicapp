import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router to navigate programmatically

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Music Collection';  // Title property to be displayed
  version = '1.0';  // Version property

  // Inject Router into the constructor
  constructor(private router: Router) { }

  // Display the version on About button click
  displayVersion() {
    alert(`Version: ${this.version}`);
  }

  // Display a message when the Artist List button is clicked
  displayArtistList() {
    // Log message for placeholder
    console.log("Artist List button clicked - Placeholder for future implementation.");

    // Navigate to the 'list-artists' route with queryParams (timestamp)
    this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
  }

  // Optionally, navigate to a different route using the Router (if needed)
  navigateToCreateAlbum() {
    this.router.navigate(['/create']);
  }
}
