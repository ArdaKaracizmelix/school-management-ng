import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login.component';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Card} from 'primeng/card';
import {IftaLabel} from 'primeng/iftalabel';
import {Button} from 'primeng/button';
import {LoginRoutesModule} from './login-routes.module';
import {HttpClientModule} from '@angular/common/http';
import {LayoutComponent} from '../layout/components/layout.component';
import {Toast} from "primeng/toast";
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [LoginComponent],
    imports: [
        InputText,
        LoginRoutesModule,
        HttpClientModule,
        FormsModule,
        Card,
        IftaLabel,
        Button,
        LayoutComponent,
        Toast
    ],
  providers:[MessageService],
  exports: [LoginComponent]
})
export class LoginModule {
}
