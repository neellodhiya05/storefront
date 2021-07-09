import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import data from '../../../files/visontype.json';


@Component({
  selector: 'vsf-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
  
 
})

export class PrescriptionComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

 public visontypedetail:{id:number,name:string,prize:string,description:string,image:string}[]=data
  
 selectedIndex: number | undefined;
  constructor( private router: Router) {}

  ngOnInit(): void {
   
  }

}
