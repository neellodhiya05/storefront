import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import data from '../../../files/nearadddata.json';

@Component({
  selector: 'vsf-add-prescription-form',
  templateUrl: './add-prescription-form.component.html',
  styleUrls: ['./add-prescription-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPrescriptionFormComponent implements OnInit {
  form!: FormGroup;
  title = 'json-file-read-angular';
  
  public rightnearadd:{id:number,name:string}[] = data
  public leftnearadd:{id:number,name:string}[] = data
  
  selectedIndex: number | undefined;


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
