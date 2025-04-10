import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {ProfileRoutesModule} from './profile-routes.module';
import {LayoutComponent} from '../layout/components/layout.component';
import {NgIf} from '@angular/common';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {Button} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import { JwtHelperService } from '@auth0/angular-jwt';
;

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutesModule,
    LayoutComponent,
    NgIf,
    Card,
    PrimeTemplate,
    Button,
    Avatar,

  ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
