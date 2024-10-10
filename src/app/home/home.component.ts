import { Component } from '@angular/core';
import { PETS } from '../shared/animals';
import { PetModel } from '../shared/pet.model';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 pets: PetModel [] = PETS
 constructor(private cartService: CartService){}

addToCart(pet: PetModel){
  this.cartService.onAddToCart(pet)
}
}
