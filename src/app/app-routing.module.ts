import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CardPageComponent } from './card-page/card-page.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'card-page', component:CardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
