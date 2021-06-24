import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  listaProdotti: Product[] = [

    { title: 'Prodotto Casa 1', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa", id:1 },
    { title: 'Prodotto Casa 2', image: "../assets/img/houses.jpg", description: 'pimpi regna pimpi regna', category: "casa", id:2 },
    { title: 'Prodotto Casa 3', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa",id:3 },
    { title: 'Prodotto Casa 4', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa",id:4 },
    { title: 'Prodotto Casa 5', image: "../assets/img/houses.jpg", description: 'The Shiba Inu is the smallest', category: "casa",id:5 },

    { title: 'Prodotto Ufficio 1', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio",id:6 },
    { title: 'Prodotto Ufficio 2', image: "../assets/img/offices.jpg", description: 'bilbo william bilbo william', category: "ufficio",id:7 },
    { title: 'Prodotto Ufficio 3', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio",id:8 },
    { title: 'Prodotto Ufficio 4', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio",id:9 },
    { title: 'Prodotto Ufficio 5', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio",id:10 },
    { title: 'Prodotto Ufficio 6', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio",id:11 },
    { title: 'Prodotto Ufficio 7', image: "../assets/img/offices.jpg", description: 'The Shiba Inu is the smallest', category: "ufficio",id:12 },
   
    { title: 'Prodotto Giardino 1', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:13 },
    { title: 'Prodotto Giardino 2', image: "../assets/img/gardens.jpg", description: 'nox fox nox fox', category: "giardino",id:14 },
    { title: 'Prodotto Giardino 3', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:15 },
    { title: 'Prodotto Giardino 4', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:16 },
    { title: 'Prodotto Giardino 5', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:17 },
    { title: 'Prodotto Giardino 6', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:18 },
    { title: 'Prodotto Giardino 7', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:19 },
    { title: 'Prodotto Giardino 8', image: "../assets/img/gardens.jpg", description: 'The Shiba Inu is the smallest', category: "giardino",id:20 },

  ];

  constructor() { }

  servWorks() {
    console.log("service is working!");

  }
 
  getProductList(): Product[] {
    return this.listaProdotti;
  }

  getProductListFilteredByCategory(category: string): Product[] {
    return this.listaProdotti.filter(
      (item: Product) => {
        return item.category === category;
      }
    );
  }

  getProductById(id: number): Product | undefined {
    return this.listaProdotti.find(
      (item: Product) => {
        return item.id === id;
      }
    );
  }

} 
