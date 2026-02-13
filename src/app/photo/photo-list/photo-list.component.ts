import {Component, OnInit, signal} from '@angular/core';
import {PhotoCardComponent} from './photo-card/photo-card.component';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Photo} from './photo-card/Photo';
import {FilterModel, PhotoListService} from './photo-list.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-photo-list',
  imports: [
    PhotoCardComponent,
    RouterLink,
    FormsModule
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})


export class PhotoListComponent implements OnInit {

  public constructor(private route: ActivatedRoute, private photoListService: PhotoListService) {
  }

  filter: FilterModel = {};

  onFilterChange(): void {
    const filterToSend: FilterModel = {
      dateFrom: this.filter.dateFrom ? new Date(this.filter.dateFrom) : undefined,
      dateTo:   this.filter.dateTo   ? new Date(this.filter.dateTo)   : undefined,
      category: this.filter.category
    };

    this.getPhotoList(filterToSend);
  }
  isLoading = signal(false);
  errorMessage = signal('');

  filteredPhotos=signal<Photo[]>([]);

  ngOnInit(): void {

    this.getPhotoList(this.filter)


  }

  getPhotoList(filter: FilterModel) {
    this.isLoading.set(true);
    const path = this.route.snapshot.routeConfig?.path;

    this.photoListService.getPhotoList(filter)
      .subscribe({
        next: (value) => {
          console.log("WARTOSCI" + value)
          this.filteredPhotos.set(value);
          if (path === 'favorites') {
            this.filteredPhotos.set(this.filteredPhotos().filter(p => p.isFavorite));
          }
          this.isLoading.set(false);
        },
        error: (err) => {
          this.errorMessage.set(err.message);
          this.isLoading.set(false);
        }
      });
  }
}

