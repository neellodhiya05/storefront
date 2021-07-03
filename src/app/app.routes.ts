import { Route } from '@angular/router';
import { LensCategoryComponent } from './core/components/lens-category/lens-category.component';
import { PrescriptionComponent } from './core/components/prescription/prescription.component';

import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { ProductListComponent } from './core/components/product-list/product-list.component';
import { VisonTypeComponent } from './core/vison-type/vison-type.component';

export const routes: Route[] = [
    {
        path: 'category/:slug',
        component: ProductListComponent,
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: ProductListComponent,
    },
    {
        path: 'product/:slug',
        component: ProductDetailComponent,
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    },
    {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
    },
    {
        path: 'prescription',
        component: PrescriptionComponent,
    },
    {
        path: 'vison-type',
        component:VisonTypeComponent,
    },
    {
        path: 'lens-category',
        component:LensCategoryComponent,
    },
];
