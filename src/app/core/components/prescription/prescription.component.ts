import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vsf-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
