import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../../../files/verifocal-card.json';
@Component({
  selector: 'vsf-verifocal-card',
  templateUrl: './verifocal-card.component.html',
  styleUrls: ['./verifocal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifocalCardComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public verifocalcard:{id:number,name:string,prize:string,description:string,image:string}[]=data
  
 selectedIndex: number | undefined;
 constructor() { }

  ngOnInit(): void {
  }

}
