import { Component, OnInit, Input } from '@angular/core';
import { ITea } from '../models/Tea.model';

@Component({
  selector: 'app-tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss']
})
export class TeaCardComponent implements OnInit {

  @Input() data: ITea;
  
  constructor() { }

  ngOnInit() {
  }
}
