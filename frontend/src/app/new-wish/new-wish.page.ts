import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { WishService } from '../services/wish.service';
import { WishphotoService } from '../services/wishphoto.service';

@Component({
  selector: 'app-new-wish',
  templateUrl: './new-wish.page.html',
  styleUrls: ['./new-wish.page.scss'],
})
export class NewWishPage implements OnInit {

  formData: FormGroup;
  id: any = null;
  wish: any;
  title: any;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  isValid: boolean = true;

  constructor(private wishService: WishService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private photoService: WishphotoService,
    private authService: AuthService) { }

    // ionViewWillEnter() {
    //   this.formData.reset();
    //   this.isSubmitted = false;
    //   this.capturedPhoto = "";
    //   this.isValid = true;
    // }

  ngOnInit() {
    this.formData = new FormGroup({
      item: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      capturedPhoto: new FormControl('')
    });
    this.isSubmitted = false;
    this.title = "New wish"
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id != null) {
      this.wishService.getWishById(this.id).subscribe((response) => {
        this.wish = response;
        this.formData.setValue({item: this.wish.item, description: this.wish.description, capturedPhoto: "http://localhost:8080/images/"+this.wish.filename});
        if(this.wish.filename){
           this.capturedPhoto = "http://localhost:8080/images/"+this.wish.filename;
        }    
        this.title = "Edit wish"
        console.log(this.formData)
        });
      }
  }

  ionViewWillEnter() {
    this.authService.isLoggedIn().then((res) => {
      if(!res){
        this.router.navigateByUrl('/login');
      }
    })
  }

  async onSubmit() {
    this.isSubmitted = true;
    this.isValid = this.formData.valid;
    let blob = null;
    if(this.capturedPhoto != ""){
      const response = await fetch(this.capturedPhoto);
      blob = await response.blob();
    }
    if(this.id == null){   
      this.formData.valid && this.postWish(this.formData.value, blob);
    } else{
      this.formData.valid && this.updateWish(this.formData.value, this.id, blob);
    }
    
  }

  postWish(wish, blob) {
    this.wishService.createWish(wish, blob).subscribe((response: Response) => {
      if (!response.status) {
        this.formData.reset();
        this.gotoMyWishes();
      }
    })
  }

  updateWish(wish, id, blob) {
    this.wishService.updateWish(wish, id, blob).subscribe((response: Response) => {
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
    this.formData.reset();
    this.router.navigateByUrl("/my-wishes");
  }


  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

}

