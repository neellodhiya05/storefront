import { Route } from '@angular/router';
import { AddLoginPrescriptionComponent } from './core/components/add-login-prescription/add-login-prescription.component';
import { AddPrescriptionFormComponent } from './core/components/add-prescription-form/add-prescription-form.component';
import { AddPrescriptionComponent } from './core/components/add-prescription/add-prescription.component';
import { BluelightCardComponent } from './core/components/bluelight-card/bluelight-card.component';
import { CartDrawerComponent } from './core/components/cart-drawer/cart-drawer.component';
import { LensCategoryComponent } from './core/components/lens-category/lens-category.component';
import { LensPackageComponent } from './core/components/lens-package/lens-package.component';
import { PrescriptionComponent } from './core/components/prescription/prescription.component';

import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { ProductListComponent } from './core/components/product-list/product-list.component';
import { SunglassesCardComponent } from './core/components/sunglasses-card/sunglasses-card.component';
import { TransitionCardComponent } from './core/components/transition-card/transition-card.component';
import { UploadFileComponent } from './core/components/upload-file/upload-file.component';
import { VerifocalCardComponent } from './core/components/verifocal-card/verifocal-card.component';
import { VisonTypeComponent } from './core/vison-type/vison-type.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';

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
    {
        path: 'lens-package',
        component:LensPackageComponent,
    },
    {
        path: 'add-prescription',
        component:AddPrescriptionComponent,
    },
    {
        path: 'add-prescription-form',
        component:AddPrescriptionFormComponent,
    },
    {
        path: 'add-login-prescription',
        component:AddLoginPrescriptionComponent,
    },
    {
        path: 'sign-in',
        component:SignInComponent,
    },
    {
        path: 'verifocal-card',
        component:VerifocalCardComponent,
    },
    {
        path: 'sunglasses-card',
        component:SunglassesCardComponent,
    },
    {
        path: 'bluelight-card',
        component:BluelightCardComponent,
    },
    {
        path: 'transition-card',
        component:TransitionCardComponent,
    },
    {
        path: 'upload-file',
        component:UploadFileComponent,
    },
    {
        path: 'cart-drawer',
        component:CartDrawerComponent,
    },
];
