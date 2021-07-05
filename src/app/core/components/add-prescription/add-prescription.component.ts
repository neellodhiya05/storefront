import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vsf-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
