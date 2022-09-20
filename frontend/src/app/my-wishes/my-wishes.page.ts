import { Component, OnInit } from '@angular/core';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-my-wishes',
  templateUrl: './my-wishes.page.html',
  styleUrls: ['./my-wishes.page.scss'],
})
export class MyWishesPage implements OnInit {

  wishes: any = []

  constructor(private wishService: WishService) { }

  ngOnInit() {
    this.getAllWishes();
  }

  getAllWishes(){
    this.wishService.getWishes().subscribe(response => {
      this.wishes = response;
    })
  }

}
