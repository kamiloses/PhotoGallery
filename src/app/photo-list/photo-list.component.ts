import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  imports: [],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})
export class PhotoListComponent {

  photoList: any[] = [
    { id: 1, title: 'Sunset in Mountains', url: 'https://via.placeholder.com/200x150.png?text=Sunset+1', description: 'Beautiful sunset with orange and pink sky', category: 'Nature', createdAt: new Date('2026-01-01'), isFavorite: false },
    { id: 2, title: 'Cute Puppy', url: 'https://via.placeholder.com/200x150.png?text=Puppy+2', description: 'Adorable small puppy playing', category: 'Animals', createdAt: new Date('2026-01-02'), isFavorite: true },
    { id: 3, title: 'Modern Art', url: 'https://via.placeholder.com/200x150.png?text=Art+3', description: 'Colorful abstract painting', category: 'Art', createdAt: new Date('2026-01-03'), isFavorite: false },
    { id: 4, title: 'Ocean Waves', url: 'https://via.placeholder.com/200x150.png?text=Ocean+4', description: 'Relaxing ocean view', category: 'Nature', createdAt: new Date('2026-01-04'), isFavorite: false },
    { id: 5, title: 'City Skyline', url: 'https://via.placeholder.com/200x150.png?text=City+5', description: 'Night view of a city', category: 'Urban', createdAt: new Date('2026-01-05'), isFavorite: true },
    { id: 6, title: 'Forest Path', url: 'https://via.placeholder.com/200x150.png?text=Forest+6', description: 'Path through green forest', category: 'Nature', createdAt: new Date('2026-01-06'), isFavorite: false },
    { id: 7, title: 'Snowy Mountains', url: 'https://via.placeholder.com/200x150.png?text=Snow+7', description: 'Winter snowy peaks', category: 'Nature', createdAt: new Date('2026-01-07'), isFavorite: false },
    { id: 8, title: 'Cute Kitten', url: 'https://via.placeholder.com/200x150.png?text=Kitten+8', description: 'Tiny playful kitten', category: 'Animals', createdAt: new Date('2026-01-08'), isFavorite: true },
    { id: 9, title: 'Abstract Colors', url: 'https://via.placeholder.com/200x150.png?text=Abstract+9', description: 'Vivid abstract painting', category: 'Art', createdAt: new Date('2026-01-09'), isFavorite: false },
    { id: 10, title: 'Desert Dunes', url: 'https://via.placeholder.com/200x150.png?text=Desert+10', description: 'Golden desert sands', category: 'Nature', createdAt: new Date('2026-01-10'), isFavorite: false },
    { id: 11, title: 'Street Art', url: 'https://via.placeholder.com/200x150.png?text=Street+11', description: 'Graffiti on a wall', category: 'Art', createdAt: new Date('2026-01-11'), isFavorite: true },
    { id: 12, title: 'Tropical Beach', url: 'https://via.placeholder.com/200x150.png?text=Beach+12', description: 'Sunny beach with palm trees', category: 'Nature', createdAt: new Date('2026-01-12'), isFavorite: false },
    { id: 13, title: 'Mountain Lake', url: 'https://via.placeholder.com/200x150.png?text=Lake+13', description: 'Calm lake in mountains', category: 'Nature', createdAt: new Date('2026-01-13'), isFavorite: false },
    { id: 14, title: 'Red Fox', url: 'https://via.placeholder.com/200x150.png?text=Fox+14', description: 'Fox in autumn forest', category: 'Animals', createdAt: new Date('2026-01-14'), isFavorite: true },
    { id: 15, title: 'Sunflower Field', url: 'https://via.placeholder.com/200x150.png?text=Sunflower+15', description: 'Field full of sunflowers', category: 'Nature', createdAt: new Date('2026-01-15'), isFavorite: false },
    { id: 16, title: 'Vintage Car', url: 'https://via.placeholder.com/200x150.png?text=Car+16', description: 'Classic retro car', category: 'Urban', createdAt: new Date('2026-01-16'), isFavorite: true },
    { id: 17, title: 'Rainbow', url: 'https://via.placeholder.com/200x150.png?text=Rainbow+17', description: 'Rainbow after rain', category: 'Nature', createdAt: new Date('2026-01-17'), isFavorite: false },
    { id: 18, title: 'Bird in Flight', url: 'https://via.placeholder.com/200x150.png?text=Bird+18', description: 'Bird flying over river', category: 'Animals', createdAt: new Date('2026-01-18'), isFavorite: true },
    { id: 19, title: 'City Bridge', url: 'https://via.placeholder.com/200x150.png?text=Bridge+19', description: 'Bridge over river in city', category: 'Urban', createdAt: new Date('2026-01-19'), isFavorite: false },
    { id: 20, title: 'Night Stars', url: 'https://via.placeholder.com/200x150.png?text=Stars+20', description: 'Starry night sky', category: 'Nature', createdAt: new Date('2026-01-20'), isFavorite: false }
  ];



}
