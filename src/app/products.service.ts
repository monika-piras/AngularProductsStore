import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  listaProdotti: Product[] = [

    { title: 'Prodotto Casa 1', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 2', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 3', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 4', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 5', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa" },

    { title: 'Prodotto Ufficio 1', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 2', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 3', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 4', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 5', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio" },
   
    { title: 'Prodotto Giardino 1', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 2', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 3', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 4', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 5', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },

  ];

  constructor() { }

  servWorks() {
    console.log("service is working!");

  }

  // getProductList(): Product[] {
  //   return this.listaProdotti;
  // }

  getProductListFilteredByCategory(category: string): Product[] {
    return this.listaProdotti.filter(
      (item: Product) => {
        return item.category === category;
      }
    );
  }

} 
