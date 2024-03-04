import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/model/Card';
import { CardService } from '../services/card/card.service';
import { CardItem } from '../shared/model/CardItem';
import { Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent implements OnInit{
  card!:Card;
  constructor(private cardService: CardService, private foodService: FoodService){
    this.setCard();
  }

  ngOnInit(): void {
    debugger
    console.log("card-page-componenet onInit");
  }
  removeFromCard(cardItem:CardItem){
    this.cardService.removeFromCard(cardItem.food.id);
    this.setCard();
  }

  changeQuantity(cardItem:CardItem, quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cardService.changeQuantity(cardItem.food.id,quantity);
    this.setCard();
  }
  setCard(){
    this.card=this.cardService.getCard();
  }

}
