import { Component, OnInit } from '@angular/core';
import { TeaCategory } from '../enums/tea-category.enum'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  Category = TeaCategory;

  constructor() { }

  ngOnInit() {
  }

}
