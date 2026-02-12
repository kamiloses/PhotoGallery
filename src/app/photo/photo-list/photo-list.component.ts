import {Component, OnInit, signal} from '@angular/core';
import {PhotoCardComponent} from './photo-card/photo-card.component';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Photo} from './photo-card/Photo';
import {PaginationComponent} from '../../pagination/pagination.component';
import {FilterModel, PhotoListService} from './photo-list.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-photo-list',
  imports: [
    PhotoCardComponent,
    RouterLink,
    PaginationComponent
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})



export class PhotoListComponent implements OnInit {

  public constructor(private route: ActivatedRoute, private photoListService: PhotoListService) {
  }

  isLoading = signal(false);
  errorMessage = signal('');

  filteredPhotos: Photo[] = [];


  ngOnInit(): void {
    const path = this.route.snapshot.routeConfig?.path;

    if (path === 'favorites') {
      this.filteredPhotos = this.filteredPhotos.filter(p => p.isFavorite);
      console.log("favorites")
    } else {
      console.log("else")
      this.filteredPhotos = this.photoList;
    }
  }


  getPhotoList(filter: FilterModel) {
    this.isLoading.set(true);
    this.photoListService.getPhotoList(filter)
      .pipe(
        catchError(err => {
          this.errorMessage.set(err.message);
          return of([]);
        })
      )
      .subscribe(value => {
        this.filteredPhotos = value;
        this.isLoading.set(false);
      });
  }
}

