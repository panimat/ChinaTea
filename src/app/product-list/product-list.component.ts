import { Component, OnInit, Input } from '@angular/core';
import { TeaService } from '../services/tea.service';
import { ITea } from '../models/Tea.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() category: any;
  products : ITea[];

  constructor(
    private teaService: TeaService,) 
  { 

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(this.category === 'all')
      this.teaService.getTeas().toPromise().then((data : ITea[]) => {
        this.products = data;
      });
    else
     {
       this.teaService.getTeasByCategory(this.category).toPromise().then((data : ITea[]) => {
        this.products = data;
      });
     }
  }
}
