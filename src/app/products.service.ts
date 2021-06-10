import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  listaProdotti: Product[] = [
    { title: 'Prodotto Ufficio 1', image: "https://media.gettyimages.com/photos/interior-of-modern-office-picture-id973712582?s=612x612", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 2', image: "https://media.gettyimages.com/photos/interior-of-modern-office-picture-id973712582?s=612x612", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 3', image: "https://media.gettyimages.com/photos/interior-of-modern-office-picture-id973712582?s=612x612", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 4', image: "https://media.gettyimages.com/photos/interior-of-modern-office-picture-id973712582?s=612x612", description: 'The Shiba Inu is the smallest', category: "ufficio" },
    { title: 'Prodotto Ufficio 5', image: "https://media.gettyimages.com/photos/interior-of-modern-office-picture-id973712582?s=612x612", description: 'The Shiba Inu is the smallest', category: "ufficio" },
   
    { title: 'Prodotto Casa 1', image: "https://lh3.googleusercontent.com/proxy/BUH7Rdi03J7HjAqjQMN5QpMYoYEuoLcMaC4w-uQFiM5tfxsP4KiCdeuZ7RQuJPmDljgo6LP_Gv_y2jBOzrz-963TT1C-mHZgj6WyZit9zDZdBdo", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 2', image: "https://lh3.googleusercontent.com/proxy/BUH7Rdi03J7HjAqjQMN5QpMYoYEuoLcMaC4w-uQFiM5tfxsP4KiCdeuZ7RQuJPmDljgo6LP_Gv_y2jBOzrz-963TT1C-mHZgj6WyZit9zDZdBdo", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 3', image: "https://lh3.googleusercontent.com/proxy/BUH7Rdi03J7HjAqjQMN5QpMYoYEuoLcMaC4w-uQFiM5tfxsP4KiCdeuZ7RQuJPmDljgo6LP_Gv_y2jBOzrz-963TT1C-mHZgj6WyZit9zDZdBdo", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 4', image: "https://lh3.googleusercontent.com/proxy/BUH7Rdi03J7HjAqjQMN5QpMYoYEuoLcMaC4w-uQFiM5tfxsP4KiCdeuZ7RQuJPmDljgo6LP_Gv_y2jBOzrz-963TT1C-mHZgj6WyZit9zDZdBdo", description: 'The Shiba Inu is the smallest', category: "casa" },
    { title: 'Prodotto Casa 5', image: "https://lh3.googleusercontent.com/proxy/BUH7Rdi03J7HjAqjQMN5QpMYoYEuoLcMaC4w-uQFiM5tfxsP4KiCdeuZ7RQuJPmDljgo6LP_Gv_y2jBOzrz-963TT1C-mHZgj6WyZit9zDZdBdo", description: 'The Shiba Inu is the smallest', category: "casa" },

    { title: 'Prodotto Giardino 1', image: "http://www.gardenterme.it/wp-content/uploads/hotel-garden-terme-montegrotto-terme-padova-veneto-le-offerte-768x576.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 2', image: "http://www.gardenterme.it/wp-content/uploads/hotel-garden-terme-montegrotto-terme-padova-veneto-le-offerte-768x576.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 3', image: "http://www.gardenterme.it/wp-content/uploads/hotel-garden-terme-montegrotto-terme-padova-veneto-le-offerte-768x576.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 4', image: "http://www.gardenterme.it/wp-content/uploads/hotel-garden-terme-montegrotto-terme-padova-veneto-le-offerte-768x576.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },
    { title: 'Prodotto Giardino 5', image: "http://www.gardenterme.it/wp-content/uploads/hotel-garden-terme-montegrotto-terme-padova-veneto-le-offerte-768x576.jpg", description: 'The Shiba Inu is the smallest', category: "giardino" },

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
