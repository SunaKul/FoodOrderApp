import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodOrderApp';


  playSound(){
    let audio = new Audio();
    audio.src= "../assets/ping.mp3";
    audio.load();
    audio.play();
  }
}




