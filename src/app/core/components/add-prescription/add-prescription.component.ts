import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../../../files/prescription.json';
@Component({
  selector: 'vsf-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPrescriptionComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public lenscategorydetail:{id:number,name:string,description1:string,button:string}[]=data
  
 selectedIndex: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
