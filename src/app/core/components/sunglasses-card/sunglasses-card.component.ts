import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../../../files/sunglasses.json';
@Component({
  selector: 'vsf-sunglasses-card',
  templateUrl: './sunglasses-card.component.html',
  styleUrls: ['./sunglasses-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SunglassesCardComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public visontypedetail:{id:number,name:string,prize:string,description:string,image:string}[]=data
  
 selectedIndex: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
