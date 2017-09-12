import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';

export const routes = RouterModule.forRoot([
    { path: '',  pathMatch:'full', redirectTo: '/home' },
    { path: 'home',  component: HomeComponent },
    { path: 'feature', component: FeatureComponent }
]);

export const components = [ HomeComponent, FeatureComponent ];
