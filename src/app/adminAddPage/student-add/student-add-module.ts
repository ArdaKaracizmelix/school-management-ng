import {NgModule} from '@angular/core';
import {StudentAddComponent} from './components/student-add.component';
import {StudentAddRoutesModule} from './student-add-routes.module';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {DatePicker} from 'primeng/datepicker';
import {FloatLabel} from 'primeng/floatlabel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {LayoutComponent} from '../../layout/components/layout.component';
import {Select} from 'primeng/select';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';
@NgModule({
  declarations: [StudentAddComponent],
  imports: [StudentAddRoutesModule, Button, Card, DatePicker, FloatLabel, FormsModule, InputText, LayoutComponent, ReactiveFormsModule, Select, Toast],
  providers:[MessageService],
  exports: [StudentAddComponent]
})export class StudentAddModule {




}
