import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetModel } from '../shared/pet.model';
import { PETS } from '../shared/animals';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  pet: PetModel;
  
constructor(
  private route: ActivatedRoute,
  private cartSevice: CartService

){
let id =parseInt(this.route.snapshot.params['id'])
this.pet = PETS[id]


}

addToCart(){
this.cartSevice.onAddToCart(this.pet)
}
}
