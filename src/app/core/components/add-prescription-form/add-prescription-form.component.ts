import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddToCart, GetProductDetail } from '../../../common/generated-types';

import data from '../../../files/data.json';
import data1 from '../../../files/NearAddData.json';
import data2 from '../../../files/PupilPreData.json';
import { DataService } from '../../providers/data/data.service';
import { NotificationService } from '../../providers/notification/notification.service';
import { StateService } from '../../providers/state/state.service';
import { ADD_TO_CART } from '../product-detail/product-detail.graphql';
@Component({
  selector: 'vsf-add-prescription-form',
  templateUrl: './add-prescription-form.component.html',
  styleUrls: ['./add-prescription-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPrescriptionFormComponent implements OnInit {

  product: GetProductDetail.Product;
    selectedAsset: { id: string; preview: string; };
    selectedVariant: GetProductDetail.Variants;
    qty = 1;
  form!: FormGroup;
  title = 'json-file-read-angular';
  
  public dataList:{id:number,name:string}[] = data
  public leftsphere:{id:number,name:string}[] = data
  public rightcyl:{id:number,name:string}[] = data
  public leftcyl:{id:number,name:string}[] = data
  public rightnearadd:{id:number,name:string}[] = data1
  public leftnearadd:{id:number,name:string}[] = data1
  public pupilpre:{id:number,name:string}[] = data2

  
  selectedIndex: number | undefined;
  addToCartTemplate: TemplateRef<any> | undefined;
  


  constructor(
    private dataService: DataService,
    private formBuilder:FormBuilder, 
    private stateService: StateService,
    private notificationService: NotificationService,
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
  addToCart(variant: GetProductDetail.Variants, qty: number) {
    this.dataService.mutate<AddToCart.Mutation, AddToCart.Variables>(ADD_TO_CART, {
        variantId: variant.id,
        qty,
    }).subscribe(({addItemToOrder}) => {
        switch (addItemToOrder.__typename) {
            case 'Order':
                this.stateService.setState('activeOrderId', addItemToOrder ? addItemToOrder.id : null);
                if (variant) {
                    this.notificationService.notify({
                        title: 'Added to cart',
                        type: 'info',
                        duration: 3000,
                        templateRef: this.addToCartTemplate,
                        templateContext: {
                            variant,
                            quantity: qty,
                        },
                    }).subscribe();
                }
                break;
            case 'OrderModificationError':
            case 'OrderLimitError':
            case 'NegativeQuantityError':
            case 'InsufficientStockError':
                this.notificationService.error(addItemToOrder.message).subscribe();
                break;
        }

    });
}
  
 submit(): void{
   console.log(this.form.getRawValue());
 }

}
