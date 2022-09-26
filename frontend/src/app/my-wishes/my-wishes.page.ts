import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-my-wishes',
  templateUrl: './my-wishes.page.html',
  styleUrls: ['./my-wishes.page.scss'],
})
export class MyWishesPage implements OnInit {

  wishes: any = []

  constructor(private wishService: WishService, private router: Router) { }

  ngOnInit() {
    this.getAllWishes();
  }

  ionViewWillEnter() {
    this.getAllWishes();
  }

  getAllWishes(){
    this.wishService.getWishes().subscribe(response => {
      this.wishes = response;
    })
  }

  deleteWish(id){
    this.wishService.deleteWish(id).subscribe(response => {
      console.log(response);     
      this.getAllWishes();
    })
  }

  gotoNewWish(){
    this.router.navigateByUrl("/new-wish");
  }
  gotoUpdateWish(id){
    this.router.navigateByUrl("/new-wish/"+id);
  }
  gotoHome(){
    this.router.navigateByUrl("/");
  }

}
