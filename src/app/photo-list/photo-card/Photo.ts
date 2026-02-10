export interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
  category: string;
  createdAt: Date;
  isFavorite: boolean;
}
