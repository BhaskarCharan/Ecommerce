import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.data.getConfig()
             .subscribe(data => this.featuredProducts = data)
    this.data.getConfig()
             .subscribe(data => this.bestSellProducts = data)
  }

}
