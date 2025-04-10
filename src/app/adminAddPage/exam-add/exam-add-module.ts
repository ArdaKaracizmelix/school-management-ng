import {NgModule} from "@angular/core";
import {ExamAddComponent} from './components/exam-add.component';
import {ExamAddRoutesModule} from './exam-add-routes.module';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {FloatLabel} from 'primeng/floatlabel';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {LayoutComponent} from '../../layout/components/layout.component';
import {Select} from 'primeng/select';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';

@NgModule({
  declarations:[ExamAddComponent],
  imports: [
    ExamAddRoutesModule,
    Button,
    Card,
    FloatLabel,
    FormsModule,
    InputText,
    LayoutComponent,
    Select,
    Toast
  ],
  providers:[MessageService],
  exports:[ExamAddComponent]
})
export class ExamAddModule {




}
