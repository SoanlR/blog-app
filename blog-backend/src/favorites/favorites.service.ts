import { Injectable } from '@nestjs/common';

export interface Favorite {
  id: number;
  title: string;
}

@Injectable()
export class FavoritesService {
  private favorites: Favorite[] = [];

  getAllFavorites(): Favorite[] {
    return this.favorites;
  }

  addFavorite(favorite: Favorite): void {
    this.favorites.push(favorite);
  }

  removeFavorite(id: number): void {
    this.favorites = this.favorites.filter(fav => fav.id !== id);
  }
}