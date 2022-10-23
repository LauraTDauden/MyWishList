import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuObject } from 'src/app/interfaces/interfaces';
import { CommonServicesService } from 'src/app/services/common-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOptions: MenuObject[] = [];
  options: Observable<MenuObject[]>

  constructor(private commonService: CommonServicesService) { }

  ngOnInit() {
    this.options = this.commonService.getMenuOptions();
  }
  
}
