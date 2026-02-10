import {Component, input} from '@angular/core';
import {Photo} from './Photo';

@Component({
  selector: 'app-photo-card',
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css',
})
export class PhotoCardComponent {


   photo=input.required<Photo>();

}
