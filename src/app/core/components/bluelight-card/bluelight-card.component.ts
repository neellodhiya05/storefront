import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../../../files/bluelight-card.json';
@Component({
  selector: 'vsf-bluelight-card',
  templateUrl: './bluelight-card.component.html',
  styleUrls: ['./bluelight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BluelightCardComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public lenscategorydetail:{id:number,name:string,prize:string,description:string,image:string}[]=data
  constructor() { }

  ngOnInit(): void {
  }

}
