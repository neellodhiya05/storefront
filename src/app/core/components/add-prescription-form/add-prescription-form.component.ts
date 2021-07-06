import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'vsf-add-prescription-form',
  templateUrl: './add-prescription-form.component.html',
  styleUrls: ['./add-prescription-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPrescriptionFormComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';

  selectedIndex: number;
  constructor(
    private formBuilder:FormBuilder, 
    ) {}
    onClick(index: number): void {
      this.selectedIndex = index;
    }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pre_name:'',
      right_sphere:'',
      left_sphere:'',
      right_cylinder:'',
      left_cylinder:'',
      right_axis:'',
      left_axis:'',
      right_nearadd:'',
      left_nearadd:'',
      pupil_pre:'',
      extra_info:''
    });
  }

 submit(): void{
   console.log(this.form.getRawValue());
 }

}
