import { Injectable } from '@angular/core';
import {Food} from  '../../shared/model/Food';



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food {
  return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodsByTag(tag:string) : Food[] {
  if(tag == "All")
  return this.getAll();
  else
  return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Hamburger',
        cookTime: '25-30',
        price: 10,
        favorite: false,
        origins: ['Germany'],
        stars: 4.5,
        imageUrl: '/assets/images/hamburger.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },
      {
        id: 2,
        name: 'Healthy Bowl',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['USA','UK'],
        stars: 4.7,
        imageUrl:'/assets/images/healthyBowl.jpg',
        tags: ['HealthyFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Pancake',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Europe', 'US'],
        stars: 3.5,
        imageUrl: '/assets/images/pancake.jpg',
        tags: ['Breakfast', 'Pancake'],
      },
      {
        id: 4,
        name: 'Pasta',
        price: 2,
        cookTime: '20',
        favorite: true,
        origins: ['Italia'],
        stars: 3.3,
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Pasta', 'Lunch'],
      },
      {
        id: 5,
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Smoothie Bowl',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['UK', 'US'],
        stars: 3.0,
        imageUrl: '/assets/images/smoothieBowl.jpg',
        tags: ['Healthy', 'Diet'],
      },
      
    ];
  }
}
