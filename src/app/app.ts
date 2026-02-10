import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {PhotoListComponent} from './photo-list/photo-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PhotoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PhotoGallery');
}
