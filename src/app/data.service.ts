import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

export interface fields{
  id:Number,
  title:String,
  price:Number,
  category:String,
  description:String,
  image:String
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: IProduct[] = [];

  constructor(private http: HttpClient) { }

  configUrl = 'https://fakestoreapi.com/products';

getConfig():Observable<fields[]> {
  return this.http.get<fields[]>(this.configUrl);
}

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }
  public products = [];
  getFeaturedProducts() {

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-2.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }

    this.products.push(prod1, prod2, prod3);

    return this.products;
  }

  getAllproducts(){
    return [...this.products]
  }
  getProduct(id: string){
   return{
     ...this.products.find(product =>product.id === id)
   }
  }
  
  addToCart(product: IProduct) {
    this.items.push(product);
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
