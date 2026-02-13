import {Component, OnInit, signal} from '@angular/core';
import {PhotoCardComponent} from './photo-card/photo-card.component';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Photo} from './photo-card/Photo';
import {FilterModel, PhotoListService} from './photo-list.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-photo-list',
  imports: [
    PhotoCardComponent,
    RouterLink
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})


export class PhotoListComponent implements OnInit {

  public constructor(private route: ActivatedRoute, private photoListService: PhotoListService) {
  }

  isLoading = signal(false);
  errorMessage = signal('');

  filteredPhotos=signal<Photo[]>([]);

  ngOnInit(): void {

    this.getPhotoList()


  }

  getPhotoList(filter?: FilterModel) {
    this.isLoading.set(true);
    const path = this.route.snapshot.routeConfig?.path;

    this.photoListService.getPhotoList(filter)
      .pipe(
        catchError(err => {
          this.errorMessage.set(err.message);
          return of([]);
        })
      )
      .subscribe({
        next: (value) => {
          this.filteredPhotos.set(value);
          if (path === 'favorites') {
            this.filteredPhotos.set(this.filteredPhotos().filter(p => p.isFavorite));
          }
          console.log("ZDJECIA po pobraniu:", this.filteredPhotos);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.errorMessage.set(err.message);
          this.isLoading.set(false);
        }
      });
  }
}

