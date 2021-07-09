import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../../../files/lenscategory.json';

@Component({
  selector: 'vsf-lens-category',
  templateUrl: './lens-category.component.html',
  styleUrls: ['./lens-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LensCategoryComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public lenscategorydetail:{id:number,name:string,prize:string,description:string,image:string}[]=data
  
 selectedIndex: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
