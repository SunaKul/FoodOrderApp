import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CardService } from '../services/card/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
  food!: Food;

  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService,
    private cardService: CardService,
    private router: Router){
    activatedRoute.params.subscribe((params)=>{
      debugger
      if(params['id'])
      this.food=foodService.getFoodById(params['id']);
    }
   
    )
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCard(){
    debugger
    this.cardService.addToCard(this.food);
    this.router.navigateByUrl('/card-page');
  }

  
  playSound(){
    let audio = new Audio();
    audio.src= "../../assets/ping.mp3";
    audio.load();
    audio.play();
  }

}
