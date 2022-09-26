import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-new-wish',
  templateUrl: './new-wish.page.html',
  styleUrls: ['./new-wish.page.scss'],
})
export class NewWishPage implements OnInit {

  private formData: FormGroup;
  id: any = null;
  wish: any;
  title: any

  constructor(private wishService: WishService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formData = new FormGroup({
      item: new FormControl(),
      description: new FormControl()
    });
    this.title = "New wish"
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id != null) {
      this.wishService.getWishById(this.id).subscribe((response) => {
        this.wish = response;
        console.log(this.wish)
        this.formData.setValue({item: this.wish.item, description: this.wish.description});
        this.title = "Edit wish"
        });
      }
  }

  onSubmit() {
    if(this.id == null){
      this.postWish(this.formData.value);
    } else{
      this.updateWish(this.formData.value, this.id);
    }
    
  }

  postWish(wish) {
    this.wishService.createWish(wish).subscribe((response: Response) => {
      if (!response.status) {
        this.formData.reset();
        this.gotoMyWishes();
      }
    })
  }

  updateWish(wish, id) {
    this.wishService.updateWish(wish, id).subscribe((response: Response) => {
      if (!response.status) {
        this.formData.reset();
        this.gotoMyWishes();
      }
    })
  }


  getWish(id) {
    this.wishService.getWishById(id).subscribe(response =>
      this.wish = response);
  }

  gotoMyWishes() {
    this.router.navigateByUrl("/my-wishes");
  }
}


