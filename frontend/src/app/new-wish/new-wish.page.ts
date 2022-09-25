import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-new-wish',
  templateUrl: './new-wish.page.html',
  styleUrls: ['./new-wish.page.scss'],
})
export class NewWishPage implements OnInit {

  private formData: FormGroup;
  id:any;

  constructor(private wishService: WishService,
    private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      item: new FormControl(),
      description: new FormControl()
    });
  }

  onSubmit() {
    this.postWish(this.formData.value);
  }

  postWish(wish) {
    this.wishService.createWish(wish).subscribe((response: Response) => {
      console.log(response);
      if(!response.status){
        this.formData.reset();
        this.gotoMyWishes();
      }     
    })
      
  }
  gotoMyWishes() {
    this.router.navigateByUrl("/my-wishes");
  }
  


}


