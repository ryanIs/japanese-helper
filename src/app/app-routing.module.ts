import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CardsComponent } from './cards/cards.component'

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    data: {
      id: 1,
      name: 'Hello world!',
    }
  },
  {
    path: 'cards', 
    component: CardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
