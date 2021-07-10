import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vsf-lens-package',
  templateUrl: './lens-package.component.html',
  styleUrls: ['./lens-package.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LensPackageComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
