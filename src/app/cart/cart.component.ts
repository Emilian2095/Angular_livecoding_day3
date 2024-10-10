import { Component } from '@angular/core';
import { PetModel } from '../shared/pet.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  petsFromCart: PetModel [];
  total: number;

  constructor(private cartService: CartService){
  this.petsFromCart = cartService.getPets();
  this.total = cartService.getTotal();
}

increaseQtty(index:number){
this.cartService.onIncreaseQtty(index)
this.calculateTotal()
}
decreaseQtty(index:number){
  this.cartService.onDecreaseQtty(index)
  this.calculateTotal()
  }
  
calculateTotal(){
  this.total = this.cartService.getTotal();
}
 deleteTotal(index:number){
this.cartService.onDeleteItem(index)
this.calculateTotal()
 }

}
