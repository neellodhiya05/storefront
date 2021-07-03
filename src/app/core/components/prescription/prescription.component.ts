import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'vsf-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
  
 
})

export class PrescriptionComponent implements OnInit {

  
  constructor( private router: Router) {}

  ngOnInit(): void {
   
  }

}
