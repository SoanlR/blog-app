import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FavoritesService, Favorite } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getFavorites(): Favorite[] {
    return this.favoritesService.getAllFavorites();
  }

  @Post()
  addFavorite(@Body() favorite: Favorite): void {
    this.favoritesService.addFavorite(favorite);
  }

  @Delete(':id')
  removeFavorite(@Param('id') id: number): void {
    this.favoritesService.removeFavorite(id);
  }
}