import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  item: string = "Magic wand";
  description: string = "To make all my wishes come true";

  constructor(private router: Router) {}

  gotoMyWishes(){
    this.router.navigateByUrl("/my-wishes");
  }

}
