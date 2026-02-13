import { Injectable } from '@angular/core';
import {Photo} from './photo-card/Photo';
import {Observable, of, throwError} from 'rxjs';
import { delay } from 'rxjs/operators';
import {PHOTO_SEED} from '../../data/photo.seed';
@Injectable({
  providedIn: 'root',
})
export class PhotoListService {

  public constructor() {
  }

  public getPhotoList(filter: FilterModel): Observable<Photo[]> {
    if (filter?.dateFrom && filter?.dateTo && filter.dateFrom > filter.dateTo) {
      return throwError(() => new Error('dateFrom cannot be later than dateTo'));
    }

    let result = PHOTO_SEED;

    if (filter) {
      result = result.filter(photo =>
        (!filter.dateFrom || photo.createdAt >= filter.dateFrom) &&
        (!filter.dateTo || photo.createdAt <= filter.dateTo) &&
        (!filter.category || photo.category === filter.category)
      );
    }
    return of(result).pipe(delay(500));
  }


}

export interface  FilterModel {
  dateFrom?: Date;
  dateTo?: Date;
  category?: string;
}
