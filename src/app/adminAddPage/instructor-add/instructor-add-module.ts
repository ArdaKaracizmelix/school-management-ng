import {NgModule} from '@angular/core';
import {InstructorAddComponent} from './components/instructor-add.component';
import {InstructorAddRoutesModule} from './instructor-add-routes.module';
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
  declarations: [InstructorAddComponent],
  imports: [InstructorAddRoutesModule, Button, Card, DatePicker, FloatLabel, FormsModule, InputText, LayoutComponent, ReactiveFormsModule, Select, Toast],
  providers:[MessageService],
  exports: [InstructorAddComponent]
}) export class InstructorAddModule { }
