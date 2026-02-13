import { Routes } from '@angular/router';
import {PhotoCardDetailsComponent} from './photo/photo-card-details/photo-card-details.component';
import {PhotoFormComponent} from './photo/photo-form/photo-form.component';
import {PhotoListComponent} from './photo/photo-list/photo-list.component';

export const routes: Routes = [{

  path: '', component: PhotoListComponent
},
  {

    path:'favorites',component:PhotoListComponent


  },

  {
    path: 'photo/add', component: PhotoFormComponent

  },


  {
    path: 'photo/:id', component: PhotoCardDetailsComponent

  },

  {
    path: 'photo/:id/edit', component: PhotoFormComponent

  },

];
