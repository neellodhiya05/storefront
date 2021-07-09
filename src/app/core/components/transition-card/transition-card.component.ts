import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../../../files/transition.json';
@Component({
  selector: 'vsf-transition-card',
  templateUrl: './transition-card.component.html',
  styleUrls: ['./transition-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionCardComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public visontypedetail:{id:number,prize:string,description:string,image:string}[]=data
  
 selectedIndex: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
