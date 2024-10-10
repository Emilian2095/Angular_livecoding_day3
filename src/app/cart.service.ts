import { Injectable } from '@angular/core';
import { PetModel } from './shared/pet.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartPets: PetModel [] =[]

  constructor() { }

 getPets(){
  return this.cartPets
 }

  onAddToCart(pet:PetModel){

    let existingPet = this.cartPets.find((thePet)=>{
    return thePet.name === pet.name
    })
    if (!existingPet) {
      this.cartPets.push(pet)
    }else{
      existingPet.qtty++
    }
    

  }
  getTotal(){
    let total = 0;
    this.cartPets.forEach(ele =>{

      total += ele.qtty * ele.price
    })
    return total;
  }
  onIncreaseQtty(index:number){
  this.cartPets[index].qtty++

  }
  onDecreaseQtty(index:number){
    if (this.cartPets[index].qtty > 1) {
      this.cartPets[index].qtty--
    }else{
      this.cartPets.splice(index,1);
    }
    
  
    } 
     onDeleteItem(index:number){
      this.cartPets[index].qtty = 1;
      this.cartPets.splice(index,1);
    }
}
