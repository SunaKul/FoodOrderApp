import { Injectable } from '@angular/core';
import { Card } from '../../shared/model/Card';
import { Food } from '../../shared/model/Food';
import { CardItem } from '../../shared/model/CardItem';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private card:Card =new Card();
  
  addToCard(food: Food):void{
   let cardItem= this.card.items.find(item => item.food.id ===food.id);
   if(cardItem){
    this.changeQuantity(food.id, cardItem.quantity+1);
    return;
   } 
   this.card.items.push(new CardItem(food));
  }

  removeFromCard(foodId:number): void{
    this.card.items = 
    this.card.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity: number){
    let cardItem=this.card.items.find(item=>item.food.id===foodId);
    if(!cardItem) return;
    cardItem.quantity=quantity;
  }

  getCard():Card{
    return this.card; 
  }
}
